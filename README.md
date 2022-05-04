<h3>Hello!</h3>
My name is Saif I am a 03/2022 GA grad and have whipped up this little script here to hopefully alleviate some of your concerns.

When I was a student at GA I realized that I may want to visit some of this material in the future. But I know that after about 6 months or so GA deactivates your enterprise account as it is not in use anymore. This for me was a problem so I did some digging and found out about <code>CHILD_PROCESSES</code>

To put things simply I wanted to be able to clone down all of the repos that I had gone through but without the manual labor of typing out git clone a million times. The irony of this entire situation is at the time of creation I manually went to each repo and stored the clone url in a .json file.
Could I have used a python script to scrape that information for me? Yes... but give me a break will ya.

OK OK enough backstory how does this work??

The script uses a module called <code>child_proccess</code> and from that module we use a method called <code>execSync</code>
"execSync" is a method that allows us to run CLI commands only after the previous command has finished. Which works out in our case since we are only using git clone.

I Also included some python starter code if you are up for a little challenge and want to give it a shot on your own.

All of this is really cool stuff and if you want to learn more I have provided some links below.

<h4><a href="https://nodejs.org/api/child_process.html" target="_blank">Child_Process</a></h4>
<h4><a href="https://docs.python.org/3/library/subprocess.html" target="_blank">Pythons Subprocess</a></h4>
