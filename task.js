function createGoogleMapIframe() {
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9221.060719730376!2d25.287550116455034!3d54.704957544160784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd940f6314e797%3A0xfe7c5252435111f5!2sVilnius%20county%20tax%20inspection%20service!5e0!3m2!1sen!2slt!4v1694151321549!5m2!1sen!2slt";
    iframe.width = "600";
    iframe.height = "450";
    iframe.style.border = "0";
    iframe.allowfullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerpolicy = "no-referrer-when-downgrade";
    return iframe;
}


function boxes() {
    let mainDivElement = document.createElement('div');
    mainDivElement.classList.add('grid');
    let mainPageDivElement = document.createElement('div');
    mainPageDivElement.classList.add('grid');

    for (let i = 0; i < 4; i++) {
        let childDivElement = document.createElement('div');
        let h1Element = document.createElement('h1');
        let paragraph1Element = document.createElement('p');
        let paragraph2Element = document.createElement('p');
        let paragraph3Element = document.createElement('p');

        const phoneLink = document.createElement('a');
        phoneLink.href = "tel:+37066666656";
        phoneLink.textContent = "+37066666656";
        
        const emailLink = document.createElement('a');
        emailLink.href = "mailto:shop1@parduotuve.lt";
        emailLink.textContent = "shop1@parduotuve.lt";
        
        const addressLink = document.createElement('a');
        addressLink.href = "https://maps.google.com?q=Laisves%20g.%2032e%20Vilnius";
        addressLink.textContent = "Laisves g. 32e";

        h1Element.textContent = "Parduotuve 1";
        paragraph1Element.textContent = "Phone: ";
        paragraph2Element.textContent = "Email: ";
        paragraph3Element.textContent = "Address: ";

        paragraph1Element.appendChild(phoneLink)
        paragraph2Element.appendChild(emailLink)
        paragraph3Element.appendChild(addressLink)

        childDivElement.appendChild(h1Element);
        childDivElement.appendChild(paragraph1Element);
        childDivElement.appendChild(paragraph2Element);
        childDivElement.appendChild(paragraph3Element);


        childDivElement.style.border = "1px solid black";
        childDivElement.style.padding = "15px";

        mainDivElement.appendChild(childDivElement);
    }
    mainPageDivElement.appendChild(mainDivElement);
    mainPageDivElement.appendChild(createGoogleMapIframe());
    document.body.appendChild(mainPageDivElement);
    mainDivElement.style.display = 'grid';
    mainDivElement.style.gridTemplateColumns = '1fr 1fr';
    mainPageDivElement.style.display = 'grid';
    mainPageDivElement.style.gridTemplateColumns = '1fr 1fr';
}

boxes();
