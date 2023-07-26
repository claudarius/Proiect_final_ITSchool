// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

jQuery(document).ready(function($){
    console.log('loaded');

    jQuery('.calc-submit-btn').click(function(){
        var isvalid = true;
        var greutate = obiectiv = 0;
        var errors = '';
        jQuery('#energiforbrug').find('input').each(function(){
            if (jQuery(this).attr('id') == 'greutate') {
                greutate = parseInt(jQuery(this).val());
                if (jQuery(this).val() < 40 || jQuery(this).val() > 240) {
                    isvalid = false;
                    errors = errors + ',' + jQuery(this).attr('aria-label');
                }
            }
            if (jQuery(this).attr('id') == 'inaltime') {
                if (jQuery(this).val() < 100 || jQuery(this).val() > 240) {
                    isvalid = false;
                    errors = errors + ',' + jQuery(this).attr('aria-label');
                }
            }
            if (jQuery(this).attr('id') == 'varsta') {
                if (jQuery(this).val() < 18 || jQuery(this).val() > 99) {
                    isvalid = false;
                    errors = errors + ',' + jQuery(this).attr('aria-label');
                }
            }
            if (jQuery(this).attr('id') == 'obiectiv') {
                obiectiv = jQuery(this).val();
                if (jQuery(this).val() < 1 || jQuery(this).val() > 100 || jQuery(this).val() > greutate || (greutate - jQuery(this).val()) < 50 ) {
                    isvalid = false;
                    errors = errors + ',' + jQuery(this).attr('aria-label');
                }
            }
        })
        var mesaj = '';
        if (isvalid) {
            if (obiectiv < 11) {
                mesaj = 'Introducing our Exclusive 1-Month Slimming Program - 1 bottle for 1 months supply and you will lose' + obiectiv + ': Your Path to a Healthier, Slimmer You! Start your journey to a more confident and health body. Look no further! Our revolutionary 1-Month Slimming Program is designed to help you achieve your goals !';
            }
            else if (obiectiv >= 11 && obiectiv < 50) {
                mesaj = 'Introducing our Exclusive 2-Months Slimming Program - 2 bottles for 2 months supply and you will lose' + obiectiv + ': Your Path to a Healthier, Slimmer You! Start your journey to a more confident and health body. Look no further! Our revolutionary 2-Months Slimming Program is designed to help you achieve your goals !';
            }
            else {
                mesaj = 'Introducing our Exclusive 2-Months Slimming Program - 3 bottles for 3 months supply and you will lose' + obiectiv + ': Your Path to a Healthier, Slimmer You! Start your journey to a more confident and health body. Look no further! Our revolutionary 3-Months Slimming Program is designed to help you achieve your goals !';
            }
        }
        else {
            errors = errors.substring(1);
            mesaj = 'Type a valid value for ' + errors;
        }
        alert(mesaj);
    })

    
})

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form elements
    const form = event.target;
    const formData = new FormData(form);

    // Validate the form fields before submission
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Additional email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // You can handle the form data here (e.g., send it to a server using fetch, AJAX, etc.)
    // For this example, we'll just log the data to the console
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Optionally, you can display a success message to the user
    alert("Thank you for your message! We'll get back to you soon.");

    // Reset the form after submission
    form.reset();
  }

  // Attach the form submission event listener
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", submitForm);