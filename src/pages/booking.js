export function booking(content) {
    const bookingContainer = document.createElement(`div`);
    const bookingHeading = document.createElement(`div`);
    const bookingItems = document.createElement(`div`);
    const bookingForm = document.createElement(`div`);
    const bookingImg = document.createElement(`img`);

    bookingContainer.classList.add(`booking-container`);
    bookingHeading .classList.add(`booking-heading`);
    bookingItems.classList.add(`booking-items`);
    bookingForm.classList.add(`booking-form`);
    bookingImg.classList.add(`booking-img`);

    content.appendChild(bookingContainer);
    bookingContainer.append(bookingHeading, bookingItems);
    bookingItems.append(bookingForm, bookingImg);

    bookingHeading.textContent = `BOOKING`;
    
};