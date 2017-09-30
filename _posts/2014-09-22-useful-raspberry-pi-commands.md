---
layout: post
title: Useful Raspberry Pi Commands
image: /media/mh_terminal.jpg
disqus_id: 1107
tags:
 - raspberrypi
 - terminal

author_name: Matt Brailsford
author_avatar: https://avatars1.githubusercontent.com/u/527305?s=200
author_url: twitter.com/mattbrailsford
author_bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed dui nec quam vestibulum semper non vel massa. Mauris vitae gravida sem. Vestibulum rutrum leo sit amet mi viverra, sit amet cursus metus consequat.
---

Getting starting with the Raspberry Pi command line can be a steep learning curve, with a whole heap of commands at your fingertips it’s hard to remember them all. Here then are a bunch of commands I use quite frequently.

### BEING SUPER

A lot of the time you’ll probably need to run commands as a super user, so to do this you’ll want to prefix your command with the keyword “sudo”

<pre class="line-numbers language-bash" data-line><code>sudo mycommand # Executes mycommand with super user permissions</code></pre>

### UPDATING/UPGRADING

As with any computer, it’s best to keep the system/packages installed on it up to date. This is done on the Raspberry Pi with 2 commands “update” and “upgrade”, where update syncs the internal database of available packages, and upgrade applies any updates.

<pre class="line-numbers language-bash" data-line><code>sudo apt-get update # Syncronizes the package database
sudo apt-get upgrade # Upgrades installed packages inline with updated package database</code></pre>

### MOVING AROUND

Once you are logged in to your Raspberry Pi you are probably going to want to navigate around the files/directories on it.

#### LS – Listing files/directories
<pre class="line-numbers language-bash" data-line><code>ls # List the contents of the current directory</code></pre>

#### CD – Changing directory
<pre class="line-numbers language-bash" data-line><code>cd Desktop # Move into a folder called Desktop inside my current location
cd /Desktop #  Move into a folder called Desktop located at the root of my device
cd ~/Desktop # Move into a folder called Desktop located in the home folder of the current user
cd .. # Move into the parent folder of my current location</code></pre>

#### PWD – Ouput the current working directory
<pre class="line-numbers language-bash" data-line><code>pwd # Prints out the path of the current working directory</code></pre>

### WORKING WITH FILES

Now that you can get around, you’ll probably want to be able to actually do something with those files.

#### MKDIR – Make a directory

<pre class="line-numbers language-bash" data-line><code>mkdir myDir # Created a new directory named myDir inside the current working directory</code></pre>

#### RMDIR – Remove empty directories

<pre class="line-numbers language-bash" data-line><code>rmdir oldDir # Removes the directory oldDir only if the folder is empty</code></pre>

#### RM – Remove a file

<pre class="line-numbers language-bash" data-line><code>rm myFile.txt # Removes the file myFile.txt</code></pre>

#### CP – Copy a file/directory

<pre class="line-numbers language-bash" data-line><code>cp oldFile.txt newFile.txt # Copies oldFile.txt into a new file named newFile.txt
cp oldFile.txt ~/tmp # Copies oldFile.txt into the ~/tmp directory
cp -r ~/tmp1 ~/tmp2 # Recursively copies files from ~/tmp1 into ~/tmp2</code></pre>

#### MV – Move a file/directory (TIP: Also handy for renaming files)

<pre class="line-numbers language-bash" data-line><code>mv oldFile.txt newFile.txt # Moves oldFile.txt to newFiles.txt, effectively renaming it
mv oldFile.txt ~/tmp # Moves oldFile.txt into the ~/tmp directory
mv ~/tmp1/myFolder ~/tmp2/myFolder # Moves the myFolder directory from ~/tmp1 to ~/tmp2</code></pre>

#### WGET – Get a file from the internet

<pre class="line-numbers language-bash" data-line><code>sudo wget http://www.example.com/file.txt # Downloads file.txt to the current working directory</code></pre>

### EDITING A FILE

There are many way that you can edit a file on your Raspberry Pi, but the easiest way is to probably use the nano command.

<pre class="line-numbers language-bash" data-line><code>sudo nano myFile.txt # Opens myFile.txt in nano for editing</code></pre>

Once you are in nano, you’ll find yourself using the following commands quite frequently.

<pre class="line-numbers language-bash" data-line><code>Ctrl+X # Exits nano (It will ask you if you want to save changes if changes have been made)
Ctrl+K # Cut the current line
Ctrl+U # Un-cut or pastes the previously cut line</code></pre>

### RUNNING A PYTHON SCRIPT

If you are creating scripts to run on your Raspberry Pi, the likelihood is that you have written it in Python. To run your script, you’ll want to use the “python” command passing in the python script file name you want to run.

<pre class="line-numbers language-bash" data-line><code>sudo python myScript.py # Runs the myScript.py python script</code></pre>

### SHUTTING DOWN/REBOOTING (SAFELY)

When it comes to shutting down or rebooting your Pi (say after making some system changes) the temptation is to just disconnect/reconnect the power, however this can lead to some unexpected side effects (corrupted SD card being the primary one). To shutdown/reboot safely then, you’ll want to use one of the following commands.

<pre class="line-numbers language-bash" data-line><code>sudo reboot # Reboots the Pi immediately
sudo shutdown -r now # Reboots the Pi immediately
sudo shutdown -r 10 # Reboots the Pi in 10 minutes from now
sudo halt # Shuts down the Pi immediately
sudo shutdown -h now # Shuts down the Pi immediately
sudo shutdown -h 10 # Shuts down the Pi in 10 minutes from now</code></pre>

I will be updating this list in future with any other commands I find myself executing on a regular basis, but for now, that should be more than enough to get you started.