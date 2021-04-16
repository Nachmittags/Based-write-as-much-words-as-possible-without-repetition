words=[]
while(1==1)
{
a=prompt("Word:")
if(words.includes(a)){break}
words.push(a.toLowerCase())
}
alert("You were able to recall " + words.length + " words without repetition. Here are they:\n" + words)
