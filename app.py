from flask import Flask, render_template
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/principal")
def principal():
    return render_template("index1.html")


@app.route("/contacto")
def contacto():
    return render_template("contacto.html")


@app.route("/capacitaciones")
def capacitaciones():
    return render_template("capacitaciones.html")


@app.route("/perfil_cliente")
def perfil_cliente():
    return render_template("perfil_cliente.html")


@app.route("/perfil_admin")
def perfil_admin():
    return render_template("perfil_admin.html")


@app.route("/login")
def login():
    return render_template("login.html")


@app.route("/registro")
def registro():
    return render_template("registro.html")


@app.route("/gruas")
def gruas():
    return render_template("gruas.html")


@app.route("/cotizaciones")
def cotizaciones():
    return render_template("cotizaciones.html")


@app.route("/mision_vision")
def mision_vision():
    return render_template("mision_vision.html")


@app.route("/admin_gruas")
def admin_gruas():
    return render_template("admin_gruas.html")


@app.route("/form_gruas")
def form_gruas():
    return render_template("form_gruas.html")


@app.route("/proyectos")
def proyectos():
    return render_template("proyectos.html")


@app.route("/form_proyectos")
def form_proyectos():
    return render_template("form_proyectos.html")


@app.route("/admin_proyectos")
def admin_proyectos():
    return render_template("admin_proyectos.html")


if __name__ == "__main__":
    app.run(debug=True)
