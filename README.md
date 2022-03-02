Hello!
My name is Saif I am a 03/2022 GA grad and have whipped up this little script here to hopefully alleviate some of your concerns.

When I was a student at GA I realized that I may want to visit some of this material in the future. But I know that after about 6 months or so GA deactivates your enterprise account as it is not in use anymore. This for me was a problem so I did some digging and found out about CHILD_PROCESSES

To put things simply I wanted to be able to clone down all of the repos that I had gone through but without the manual labor of typing out git clone a million times. The irony of this entire situation is at the time of creation I manually when to each repo and store the clone url in a .json file.
Could I have used a python script to scrape that information for me? Yes but give me a break will ya.

OK OK enough backstory how does this work??

The script uses a module called <code>child_proccess</code>