        $(document).ready(function() {
            $('#mycarousel').carousel({interval: 2000});
            $('#carouselButton').click(function() {
                if ($('#carouselButton').children("span").hasClass('fa-pause')) {
                    $("#mycarouselButton").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }

                else if ($("#carouselButton").children("span").hasClass('fa-play')) {
                    $("#carouselButton").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');
                }
            });           
        });
        $(document).ready(function(){
            $("#modalButton").click(function(){
            $("#reserveModal").modal('show');
            });

            $("#Hidereserve").click(function(){
            $("#reserveModal").modal('hide');
            });

            $("#Closereserve").click(function(){
            $("#reserveModal").modal('hide');
            });

            

        });

        $(document).ready(function(){
            $("#loginButton").click(function(){
            $("#loginModal").modal('show');
            });

            $("#Close").click(function(){
            $("#loginModal").modal('hide');
            });

            $("#Hide").click(function(){
            $("#loginModal").modal('hide');
            });

        });