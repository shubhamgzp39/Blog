function fullPost(){
    window.location.href="./post.html";
  }
  
  function onDeletePost(){
    document.getElementById('deletePostPrompt').style.display='block';
  }
  
  
  function onCloseDeleteClicked() {
    document.getElementById('deletePostPrompt').style.display='none';
  }

  function openCreatePost() {
    
  }
  
  var myPost;
  
  myPost = [
            {
              author: "Jimi", 
              title: "Hello there ! This is Post 1.", 
              blogContent: "Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz."
            },
            {
              author: "Jimi", 
              title: "Hello there ! This is Post 2.", 
              blogContent: "Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz." 	
              }
  ];
  
  for (i=0; i<myPost.length; i++) {
      document.createElement('p');
  }
  