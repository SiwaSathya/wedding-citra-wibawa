var musik=new Audio();
                        musik.src="wedding.mp3";
                        musik.loop=true;
                        musik.play();

                        function mulaiAudio(){
                            var play=document.getElementById("play");
                            play.addEventListener('click', fplay);

                            function fplay(){
                                if(musik.paused){
                                    musik.play();
                                    play.getElementById("img").src = "pause.png";
                                }
                                else{
                                    musik.pause();
                                    play.getElementById("img").src = "play.png";
                                    
                                }
                            }
                        }
                        window.addEventListener('load', mulaiAudio);