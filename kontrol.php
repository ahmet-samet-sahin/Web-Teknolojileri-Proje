<!Doctype html>
	<body>
		<?php
			$kullanici_adi="g201210357@sakarya.edu.tr";
			$sifre="g201210357";
			
			if(($_POST["email"]==$kullanici_adi) and ($_POST["sifre"]==$sifre)){
				echo "Hoşgeldiniz g201210357";
				
			}else{
				header("Refresh:2;url=giris.html");
			}
			
			
		?>
	</body>
</html>