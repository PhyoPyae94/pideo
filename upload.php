<?php
require('includes/header.php'); 
require('includes/classes/videoDetailsFormProvider.php'); 
?>

<div class="column">
   <?php
        $formProvider = new videoDetailsFormProvider();
        echo $formProvider->createUploadForm();
    ?>
</div>

<?php require('includes/footer.php'); ?>