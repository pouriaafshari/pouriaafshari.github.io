
# A very simple Flask Hello World app for you to get started with...

from flask import Flask
from flask import request
from flask_cors import CORS
from pathlib import Path
import os
import random
import string

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/", methods=["POST"])

def myomy():

    #Generate rando name for the REQUEST
    length_of_string = 8

    letters_and_digits = string.ascii_lowercase
    name = ""

    for number in range(length_of_string):
      name += random.choice(letters_and_digits)


    #Get inputs form REQUEST
    code = str(request.form.get('code'))
    lang = str(request.form.get('lang'))
    inpt = str(request.form.get('inpt'))

    #Create a File for code
    with open('bin/'+ name +'.'+ lang, 'w') as f:
        f.write(code)

    #Save input file as TXT
    with open('bin/'+ name +'inp.txt', 'w') as f:
        f.write(inpt)

    #Make new program to compile the file in PYTHON
    with open('bin/'+ name +'kooni.py' , 'w') as ft:
        ft.write("import os\n")
        ft.write("import time\n")
        ft.write("import multiprocessing\n")
        ft.write("name = '"+ name +"'\n")
        ft.write("def foo():\n")
        #Take the iput, Compile and save the output
        if lang == 'py':
            ft.write("   command = 'echo $(cat \"bin/' + name + 'inp.txt\") | python bin/' + name + '.py 2> bin/' + name + '.txt >> bin/' + name + '.txt'\n")
            ft.write("   os.system(command)\n")
        if lang == 'c':
            ft.write("   Fcommand = 'gcc bin/' + name + '.c -o bin/' + name + ' 2> bin/' + name + '.txt'\n")
            ft.write("   os.system(Fcommand)\n")
            ft.write("   Scommand = 'echo $(cat \"bin/' + name + 'inp.txt\") | bin/' + name + ' >> bin/' + name + '.txt'\n")
            ft.write("   os.system(Scommand)\n")
        if lang == 'cpp':
            ft.write("   Fcommand = 'g++ bin/' + name + '.cpp -o bin/' + name + ' 2> bin/' + name + '.txt'\n")
            ft.write("   os.system(Fcommand)\n")
            ft.write("   Scommand = 'echo $(cat \"bin/' + name + 'inp.txt\") | bin/' + name + ' >> bin/' + name + '.txt'\n")
            ft.write("   os.system(Scommand)\n")
        if lang == 'java':
            ft.write("   command = 'echo $(cat \"bin/' + name + 'inp.txt\") | java bin/' + name + '.java 2> bin/' + name + '.txt >> bin/' + name + '.txt'\n")
            ft.write("   os.system(command)\n")

        ft.write("if __name__ == '__main__':\n")
        ft.write("   p = multiprocessing.Process(target=foo)\n")
        ft.write("   p.start()\n")
        ft.write("   time.sleep(5)\n")
        ft.write("   p.terminate()\n")


    #Run the compiler
    runcompiler = 'python bin/' + name + 'kooni' + '.py'
    os.system(runcompiler)

    #Get the output
    output = Path('bin/'+ name + '.txt').read_text()

    #Delete the program and output
    #deletecommand = 'rm /home/pooriya007/bin/*'
    #os.system(deletecommand)

    return output











