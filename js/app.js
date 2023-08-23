// product N0. 1

getEventHandler('btn-accessories', 'spoon-holder-price', 'product1', 'product-img1');

// Product N0. 2

getEventHandler('btn-chopper', 'chopper-price', 'product2', 'product-img2');

// Product N0. 3

getEventHandler('btn-cooker', 'cooker-price', 'product3', 'product-img3');

// Product N0. 4

getEventHandler('btn-cap', 'cap-price', 'product4', 'product-img4');

// Product N0. 5

getEventHandler('btn-jersey', 'jersey-price', 'product5', 'product-img5');

// Product N0. 6

getEventHandler('btn-cates', 'cates-price', 'product6', 'product-img6');

// function for card event handler

function getEventHandler(cardBtn, cardPriceId, productName, productImage){
    document.getElementById(cardBtn).addEventListener('click', () => {
        const cardPrice = document.getElementById(cardPriceId);
        const cardPriceValue = parseFloat(cardPrice.innerText);


        const totalPrice = document.getElementById('total-price');
        const totalPriceValue = parseFloat(totalPrice.innerText);

        const inputField = document.getElementById('coupon-field');

        const accessoriesName = document.getElementById(productName);
        const accessoriesNameValue = accessoriesName.innerText;
        
        const productImg = document.getElementById(productImage);

        const sourceImg = productImg.getAttribute('src');


        const accessoriesNameContainer = document.getElementById('product-name');
        const div = document.createElement('div');
        const count = accessoriesNameContainer.childElementCount;
        div.classList.add('mb-5', 'flex', 'items-center');
        
        const img = document.createElement('img');
        img.setAttribute('src', sourceImg);

        img.classList.add('w-10', 'h-10', 'mr-3')

        const p = document.createElement('p');
        p.innerText = `${count+1}. ${accessoriesNameValue}`;

        div.appendChild(img);

        div.appendChild(p);

        accessoriesNameContainer.appendChild(div)



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
                const discount = ((total/100* 20)).toFixed(2);
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


