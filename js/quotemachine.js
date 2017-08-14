var quotes = ["A person who never made a mistake never tried anything new!___Albert Einstein."
,"I am not handsome but I can give my HAND to SOME one who need help. Beauty is in heart not on face.____Swamy vivekananda."
,"If you want to live a happy life, tie it to a goal, not to people or objects.___Albert Einstein.","True guidance is like a small torch in a dark forest.It does not show everything once.But gives enough light for the next step to be safe.____Swamy vivekananda.", "Life is like  riding a bicycle, to keep your balance, you must keep moving!____Alber Einstein.", "You never fail until you stop trying.____Albert Einstein." ,"One positive thought in the morning can change your whole day.___Gobubsy.","Imagination is more important than knowledge.___Albert Einstein.","If cannot explain it simply, you cannot understand it well___Albert Einstein.","Try not to become a man of success but rather try to become a man of value.___Albert Einstein."]
var h2 = document.querySelector("h2");
var button = document.querySelector("button");
button.addEventListener("click", function (){
   var x = Math.floor(Math.random() * 10);
   h2.innerHTML = quotes[x];
  });
