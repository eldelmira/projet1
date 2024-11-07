import string
from random import randint, choice
import tkinter as tk
from tkinter import *
def generate_password():
    password_min = 8
    password_max = 13
    all_chars = string.ascii_letters + string.punctuation + string.digits
    
    password ="".join(choice(all_chars) for x in range(randint(password_min, password_max)))
    password_entry.delete(0, END)
    password_entry.insert(0,password)
    


window = tk.Tk()
window.title("Générateur de mot de passe")
window.config(background='#4065A4')
#window.iconbitmap("C:/Users/eldel/Dropbox/PC/Downloads/emojipng.com-8951920 (1).ico")
frame= Frame(window, bg='#4065A4')
width = 300
height = 300
#image = PhotoImage(file="C:/Users/eldel/Dropbox/PC/Desktop/PILE & FILE/password.png").zoom(35).subsample(32)
canvas= Canvas(frame, width=width, height=height,bg='#4065A4', bd=0, highlightthickness=0)
canvas.create_image(width/2, height/2)
canvas.grid(row=0,column=0, sticky=W)
right_frame= Frame(frame, bg='#4065A4')

label_title = Label(right_frame, text=" Mot de passe",font=("Bold Italic",20),bg='#4065A4', fg='white')
label_title.pack()

password_entry= Entry(right_frame,font=("Bold Italic",20),bg='#4065A4', fg='white')
password_entry.pack()

generate_password_button = Button(right_frame, text=" Générer",font=("Bold Italic",20),bg='#4065A4', fg='white', command= generate_password)
generate_password_button.pack(fill=X)



right_frame.grid(row=0,column=0, sticky=S)
frame.pack(expand=YES)


menu_bar = Menu(window)

file_menu = Menu(menu_bar, tearoff=0)
file_menu.add_command(label= "Nouveau", command=generate_password)
file_menu.add_command(label="Quitter", command= window.destroy)
menu_bar.add_cascade(label= "Fichier", menu=file_menu)

window.config(menu=menu_bar)
window.mainloop()