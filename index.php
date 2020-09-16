<?php
$CDN = "http://localhost/timds-pack-test/packages/";

$WebComponentsJS1URL = $CDN . "webcomponents/0.0.1/tim-components.esm.js";
$WebComponentsJS2URL = $CDN . "webcomponents/0.0.1/tim-components.js";
$WebComponentsCSSURL = $CDN . "webcomponents/0.0.1/tim-components.css";

$CohesionCSS = $CDN . "cohesion-reset.css";

$IconePath = $CDN . "icones/0.0.1/<nome-icone>.svg";
$FontsPath = $CDN . "fonts/0.0.1/<nome-icone>.svg";

$CardTitle = "Família grande";
$CardBonus = "20GB";
$CardText = "Para você e mais <br/>08 pessoas";
$CardPrice = "256,32";
?>

<!DOCTYPE html>
<html lang="en">


    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TIM Design System</title>

        <!-- COMPONENTES -->
        <script type="module" src="<?php echo $WebComponentsJS1URL; ?>"></script>
        <script nomodule src="<?php echo $WebComponentsJS2URL; ?>"></script>
        
        <!-- ESTILO DOS COMPONENTES -->
        <link rel="stylesheet" href="<?php echo $WebComponentsCSSURL; ?>" />

        <!-- ESTILO DOS COMPONENTES -->
        <link rel="stylesheet" href="<?php echo $CohesionCSS; ?>" />

        


    </head>


    <body style="background:#f1f1f1">


        <div style="margin: 80px auto; padding: 80px; width: 600px; background:#eaeaea">


        
            <!-- COMPONENTE: TIM OFFER CARD -->
            <tim-offer-card style="margin: 0px auto;" header-label="<?php echo $CardTitle; ?>" header-text="<?php echo $CardBonus; ?>" value="<?php echo $CardPrice; ?>" onClick="clicou('teste do <tim-offer-card/>')">
                <?php echo $CardText; ?>
            </tim-offer-card>
            <!-- /END -->

            <?php for($i = 0; $i < 10; $i++){?>

                <!-- COMPONENTE: TIM CARD -->
                <tim-card style="margin: 80px auto; cursor:pointer;" header="<?php echo $i + 10; ?>" onClick="clicou('teste do <tim-card/>')">
                    Baixe a segunda via <br/>clicando aqui
                    <br/><br/>
                    <?php echo $CardBonus . " por R$ " . $CardPrice; ?><br/>
                </tim-card>
                <!-- /END -->

            <?php } ?>



        </div>


        <script>

            function clicou(txt){
                console.log(txt);
                console.log("------------------------------------------------");
                window.alert(txt);
            }
            
        </script>

    </body>


</html>