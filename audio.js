 var musik=new Audio () ;
                        musik.src="wedding.mp3";
                        musik.loop=true;
                        musik.autoplay=true;
                        musik.play();

                        function mulaiAudio(){
                            var play=document.getElementById("play");
                            play.addEventListener('click', fplay);
                            musik.play();

                            function fplay(){
                                if(musik.paused){
                                    musik.play();
                                    play.style.background="url(pause.png)"
                                }
                                else{
                                    musik.pause();
                                    play.style.background="url(play.png)"
                                    
                                }
                            }
                        }
                        window.addEventListener('load', mulaiAudio);
