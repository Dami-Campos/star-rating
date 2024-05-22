let cards = document.querySelectorAll(".card");
let footer = document.querySelector('.footer_head');

// Iterar sobre cada imagen y agregar un event listener de clic
cards.forEach(function(card) {
  card.addEventListener('click', function(event) {
    let currentSrc = event.target.getAttribute('src');
    
    // Cambiar la lógica de cambio de imagen
    if (currentSrc === "/star-rating-component/design/Frame.png") {
      event.target.setAttribute('src', '/star-rating-component/design/second_frame.png');
    } else {
      event.target.setAttribute('src', '/star-rating-component/design/Frame.png');
    }
    
    // Recalcular el número de estrellas seleccionadas
    let selectedStars = document.querySelectorAll(".card[src='/star-rating-component/design/second_frame.png']").length;
    
    // Cambiar el mensaje del footer dependiendo de la cantidad de estrellas seleccionadas
    switch (selectedStars) {
      case 2:
        footer.textContent = "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.";
        break;
      case 3:
        footer.textContent = "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.";
        break;
      case 4:
        footer.textContent = "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.";
        break;
      case 5:
        footer.textContent = "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform";
        break;
      default:
        footer.textContent = "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.";
    }
  });
});
