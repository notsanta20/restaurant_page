export function booking(content) {
    const bookingContainer = document.createElement(`div`);
    const bookingHeading = document.createElement(`div`);
    const bookingItems = document.createElement(`div`);
    const bookingForm = document.createElement(`div`);
    const bookingImg = document.createElement(`div`);

    bookingContainer.classList.add(`booking-container`);
    bookingHeading .classList.add(`booking-heading`);
    bookingItems.classList.add(`booking-items`);
    bookingForm.classList.add(`booking-form`);
    bookingImg.classList.add(`booking-img`);

    content.appendChild(bookingContainer);
    bookingContainer.append(bookingHeading, bookingItems);
    bookingItems.append(bookingForm, bookingImg);

    bookingHeading.textContent = `BOOKING`;
    bookingImg.src = `../assets/design/about.png`;

    bookingForm.innerHTML = `
        <form action="">
            <div class="form-container">
                <label for="name">Full name</label>
                <input type="text" id="name">
            </div>
            <div class="form-container">
                <label for="time">Time</label>
                <input type="text" id="time">
            </div>
            <div class="form-container">
                <label for="phone">Phone number</label>
                <input type="tel" id="phone">
            </div>
            <div class="form-container">
                <label for="guest">Guest</label>
                <input type="number" id="guest">
            </div>
            <div class="form-container">
                <label for="date">Date</label>
                <input type="date" id="date">
            </div>
            <div class="form-container">
                <input type="submit" value="RESERVE" id="reserve">
            </div>      
        </form>`;
    
    const reserve = document.querySelector(`#reserve`);
    reserve.addEventListener(`click`, ()=>{
        event.preventDefault();
    })
};