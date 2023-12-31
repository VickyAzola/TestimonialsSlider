const testimonial = [
    {
    "image": "images/image-tanya.jpg",
    "text": 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
    "name": "Tanya Sinclair",
    "job": "UX Engineer"
    },
    {
    "image": "images/image-john.jpg",
    "text": 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
    "name": "John Tarkpor",
    "job": "Junior Front-end Developer"
    }
];

const picture = document.getElementById("picture");
const quote = document.getElementById("quote");
const namePerson = document.getElementById("name");
const job= document.getElementById("job")


function next() {
    picture.src = testimonial[1].image
    quote.innerText = testimonial[1].text
    namePerson.innerText = testimonial[1].name
    job.innerText = testimonial[1].job
}

function back() {
    picture.src = testimonial[0].image
    quote.innerText = testimonial[0].text
    namePerson.innerText = testimonial[0].name
    job.innerText = testimonial[0].job
}