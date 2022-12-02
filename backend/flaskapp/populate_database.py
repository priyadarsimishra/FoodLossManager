import csv
import datetime
import os
import sqlite3
import click
from flask import current_app, g
from flask.cli import with_appcontext

# IMPORTANT db is a connection to the database


def populate(db):
    # value is hardcoded in for now because limited data
    data_folder_path = "./data/processed/master_sales_data_2021.csv"
    rows = []
    sql_string = ''''''
    count = 0
    with open(data_folder_path, 'r', newline='', encoding="utf-8-sig", ) as csvfile:
        reader = csv.reader(csvfile, delimiter=',', dialect='excel')
        for row in reader:
            food_name = row[0]
            menu_price = row[1]
            quantity = row[2]
            gross = row[3]
            discount = row[4]
            net = row[5]
            begin_date = row[6]
            end_date = row[7]
            db.execute('''INSERT INTO sales_data (food_name, menu_price, quantity, gross, discount, net, begin_date, end_date)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)''',
                       (food_name, menu_price, quantity, gross,
                        discount, net, begin_date, end_date)
                       )
            db.commit()
            cursor = db.cursor()
            count += 1
            if count % 100 == 0:
                print(count)
        csvfile.close()
