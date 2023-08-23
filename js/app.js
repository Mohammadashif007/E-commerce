// product N0. 1

getEventHandler('btn-accessories', 'spoon-holder-price');

// Product N0. 2

getEventHandler('btn-chopper', 'chopper-price');

// Product N0. 3

getEventHandler('btn-cooker', 'cooker-price');

// Product N0. 4

getEventHandler('btn-cap', 'cap-price');

// Product N0. 5

getEventHandler('btn-jersey', 'jersey-price');

// Product N0. 6

getEventHandler('btn-cates', 'cates-price');

// function for card event handler

function getEventHandler(cardBtn, cardPriceId){
    document.getElementById(cardBtn).addEventListener('click', () => {
        const cardPrice = document.getElementById(cardPriceId);
        const cardPriceValue = parseFloat(cardPrice.innerText);


        const totalPrice = document.getElementById('total-price');
        const totalPriceValue = parseFloat(totalPrice.innerText);

        const inputField = document.getElementById('coupon-field');
        // const inputFieldValue = inputField.value;
        // console.log(inputFieldValue);
        

        const btnPurchase = document.getElementById('btn-make-purchase');


        const total = cardPriceValue + totalPriceValue;
        totalPrice.innerText = total;

        

        if(total > 0){
            btnPurchase.removeAttribute('disabled');
            btnPurchase.classList.add('btn-primary');
        }

        const btnApply = document.getElementById('btn-apply');
        if(total >= 200){
            btnApply.removeAttribute('disabled');
            btnApply.classList.add('btn-primary');
        }

        btnApply.addEventListener('click', () => {
            
            // console.log(inputFieldValue);
            if(inputField.value == 'DD'){
                const discount = ((total/100* 20));
                const grandTotalValue = total - discount;
                const discountPrice = document.getElementById('discount');
                discountPrice.innerText = discount;

                const grandTotal = document.getElementById('grand-total');
                grandTotal.innerText = grandTotalValue;
            }
        })

        document.getElementById('modal-close-btn').addEventListener('click', () => {
            location.reload();
        })

    })
}


