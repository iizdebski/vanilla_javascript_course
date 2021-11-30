
(function(){
    // customers
    let customers = [];
    let index = 0;

    // object constructor function

    function Customer(name,img,text){
        this.name = name;
        this.img = img;
        this.text = text;
    }  
    // create customer function
    
    function createCustomer(name, img, text){
        // full img
        let fullImg = `img/customer-${img}.jpg`;

        // create a new customer instance
        const customer = new Customer(name, fullImg, text);
        // add to all customers
        customers.push(customer);    
    }

    createCustomer('john', 1, `lorem Ipsum is simply dummy text of the
    printing and typesetting industry. Lorem Ipsum has been the industry's
     standard dummy text ever since the 1500s, when an unknown`);
    createCustomer('bob', 2, `printer took a gallery of type and scrambled
    it to make a type specimen book. It has survived not only five
    centuries, but also the leap into electronic typesetting, remaining`);
    createCustomer('peter', 3, `essentially unchanged. It was popularised
    in the 1960s ith the release of Letraset sheets containing Lorem Ipsum
    passages, and more recently with desktop publishing software like 
    Aldus PageMaker including versions of Lorem Ipsum`);
    createCustomer('arnold', 4, `It is a long established fact that a reader 
    will be distracted by the readable content of a page when
    looking at its layout. The point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters, as opposed to using
    'Content here, content here`);

    // console.log(customers);

    document.querySelectorAll('.btn').forEach(function(item){
        item.addEventListener('click', function(event){
            event.preventDefault();
            // console.log(event.target);

            if(event.target.parentElement.classList.contains('prevBtn')){
                if(index === 0){
                    index = customers.length;
                }
                index--;
                document.getElementById('customer-img').src=customers[index].img;
                document.getElementById('customer-name').textContent=customers[index].name;
                document.getElementById('customer-text').textContent=customers[index].text;
            }
            if(event.target.parentElement.classList.contains('nextBtn')){
                if(index === (customers.length - 1)){
                    index =-1;
                }
                index++;
                document.getElementById('customer-img').src=customers[index].img;
                document.getElementById('customer-name').textContent=customers[index].name;
                document.getElementById('customer-text').textContent=customers[index].text;
            }
        })
    })


})();