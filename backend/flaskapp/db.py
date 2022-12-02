import sqlite3
import click
from flask import current_app, g
from flask.cli import with_appcontext
import flaskapp.populate_database

# IMPORTANT: db is a connection to database


def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row
    return g.db


def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()


def init_db():
    db = get_db()

    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))


def populate_db():
    flaskapp.populate_database.populate(get_db())


@click.command('init-db')
def init_db_command():
    """Clear the existing data and create new tables"""
    init_db()
    click.echo("Initialized the database.")


@click.command('populate-db')
def populate_db_command():
    """Populate the database with a master file csv data in /data/processed/master_sales_data"""
    populate_db()
    click.echo("db has been populated")


def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)
    app.cli.add_command(populate_db_command)


# Methods for the database
def get_sales_data(count):
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM sales_data")
    target_rows = cursor.fetchmany(size=count)

# db_file = "./backend/flaskapp/sfs.db"

# def create_connection(db_file):

#     con = sqlite3.connect(db_file)
#     sql = '''
#         SELECT * FROM sales_data
#     '''
#     cur = con.cursor()
#     cur.execute(sql)
#     rows = cur.fetchall()

#     for row in rows:
#         print(row)
