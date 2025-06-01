function toggleBold() {
        document.execCommand('bold');
        updateButtonState();
      }

      function toggleItalic() {
        document.execCommand('italic');
        updateButtonState();
      }

      function toggleUnderline() {
        document.execCommand('underline');
        updateButtonState();
      }

      function changeColor() {
        const color = document.getElementById("fontColor").value;
        document.execCommand("foreColor", false, color);
      }

      function align(type) {
        switch (type) {
          case 'left':
            document.execCommand("justifyLeft");
            break;
          case 'center':
            document.execCommand("justifyCenter");
            break;
          case 'right':
            document.execCommand("justifyRight");
            break;
          case 'justify':
            document.execCommand("justifyFull");
            break;
        }
        updateButtonState(); 
      }

      function undo() {
        document.execCommand("undo");
      }

      function redo() {
        document.execCommand("redo");
      }

      function updateButtonState() {
        
        document.getElementById("boldBtn").classList.toggle("active", document.queryCommandState("bold"));
        document.getElementById("italicBtn").classList.toggle("active", document.queryCommandState("italic"));
        document.getElementById("underlineBtn").classList.toggle("active", document.queryCommandState("underline"));

        
        document.getElementById("leftBtn").classList.toggle("active", document.queryCommandState("justifyLeft"));
        document.getElementById("centerBtn").classList.toggle("active", document.queryCommandState("justifyCenter"));
        document.getElementById("rightBtn").classList.toggle("active", document.queryCommandState("justifyRight"));
        document.getElementById("justifyBtn").classList.toggle("active", document.queryCommandState("justifyFull"));
      }

      
      document.addEventListener("selectionchange", updateButtonState);