import os
from flask import Flask
from flask_restful import Resource, Api


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY="temporary",
        DATABASE=os.path.join(app.instance_path, "sfs.db"),
    )
    api = Api(app)

    if test_config is None:
        # Load the instance config, if it exists, when not testing
        app.config.from_pyfile("config.py", silent=True)
    else:
        # Load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exist
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    # temporary hello page

    class HelloWorld(Resource):
        def get(self):
            return {'hello': 'world'}
    api.add_resource(HelloWorld, "/hello")
    from . import db
    db.init_app(app)
    return app
