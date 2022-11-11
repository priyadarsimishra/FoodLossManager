from flask import Flask, request, jsonify
from flask_restful import Resource, Api, marshal_with, fields
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sproutfoods.db'
db = SQLAlchemy(app)
# db.create_all()

fake_database = {
    1: {"name": "Clean Car"},
    2: {"name": "Write Blog"},
    3: {"name": "Start Stream"}
}

menu_items_fields = {
    "id": fields.Integer,
    "name": fields.String,
    "menu_cost": fields.Float,
    "quantity": fields.Integer,
    "gross": fields.Float,
    "discount": fields.Float,
    "net": fields.Float
}

#Users are associated with a restaurant
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    restaurant = db.relationship('Restaurant', backref='user',lazy =True, uselist = False)
    def __repr__(self):
        return '<User %r>' % self.username

class Restaurant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)


class MenuItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    menu_cost = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    gross = db.Column(db.Float, nullable=False)
    discount = db.Column(db.Float, nullable=False)
    net = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return "[id={}, name={}, menu_cost={}, quantity={}]".format(str(id), self.name, str(self.menu_cost), str(self.quantity))


class MenuItems(Resource):
    @marshal_with(menu_items_fields)
    def get(self):
        menu_items = MenuItem.query.all()
        return menu_items

    @marshal_with(menu_items_fields)
    def post(self):
        data = request.json
        new_item = MenuItem(name=data["name"], menu_cost=data["menu_cost"], quantity=data["quantity"],
                            gross=data["gross"], discount=data["discount"], net=data["net"])
        db.session.add(new_item)
        db.session.commit()
        menu_items = MenuItem.query.all()
        return menu_items

api.add_resource(MenuItems, "/inventory-activity")

# class Task(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String, nullable=False)

#     def __repr__(self):
#         return "[id: ", +str(id)+", "+"name: "+self.name+"]"


# class Items(Resource):
#     @marshal_with(taskFields)
#     def get(self):
#         tasks = Task.query.all()
#         return tasks

#     @marshal_with(taskFields)
#     def post(self):
#         data = request.json
#         task = Task(name=data['name'])

#         db.session.add(task)
#         db.session.commit()
#         tasks = Task.query.all()

#         return tasks


# class Item(Resource):
#     @marshal_with(taskFields)
#     def get(self, index):
#         task = Task.query.filter_by(id=index).first()
#         return task

#     # @marshal_with(taskFields)
#     def put(self, index):
#         data = request.json
#         fake_database[index]['name'] = data['name']
#         return fake_database

#     # @marshal_with(taskFields)
#     def delete(self, index):
#         del fake_database[index]
#         return fake_database


# api.add_resource(Items, '/')
# api.add_resource(Item, '/<int:index>')

if __name__ == '__main__':
    app.run(debug=True)
