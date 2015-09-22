
# A very simple Flask Hello World app for you to get started with...


from flask import Flask, render_template, request, flash
#from flask.ext.mail import Message, Mail
import json











app = Flask(__name__)

app.secret_key = 'development key'





@app.route('/')
def home():
  return render_template('main.html')








@app.route('/about')
def about():
  return render_template('about.html')
@app.route('/about/')
def about2():
  return render_template('about.html')








if __name__ == '__main__':
  app.run(debug=True)
