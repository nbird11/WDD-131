var numParticipants = 1;

/**
 * Get the template for a participant
 * @param {number} num The number of the participant
 * @returns {string} The template for the participant
 */
function getParticipantTemplate(num) {
  return `<section class="participant${num}">
          <p>Participant ${num}</p>
          <div class="item">
            <label for="fname${num}"> First Name<span>*</span></label>
            <input id="fname${num}" type="text" name="fname" value="" required />
          </div>
          <div class="item activities">
            <label for="activity${num}">Activity #<span>*</span></label>
            <input id=activity${num} type="text" name="activity" />
          </div>
          <div class="item">
            <label for="fee${num}">Fee ($)<span>*</span></label>
            <input id="fee${num}" type="number" name="fee" />
          </div>
          <div class="item">
            <label for="date${num}">Desired Date <span>*</span></label>
            <input id="date${num}" type="date" name="date" />
          </div>
          <div class="item">
            <p>Grade</p>
            <select>
              <option selected value="" disabled selected></option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
        </section>`
}

document.getElementById('add').addEventListener('click', (e) => {
  e.target.insertAdjacentHTML('beforebegin', getParticipantTemplate(++numParticipants));
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  /** @type {HTMLInputElement[]} */
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements]
  const fees = feeElements.reduce((acc, curr) => {
    return acc + parseFloat(curr.value);
  }, 0);

  const adultName = document.getElementById('adult_name').value;

  /** @type {HTMLFormElement} */
  const form = document.querySelector('form');
  form.style.display = 'none';
  document.getElementById('summary').innerHTML = `
    <h2>Thank you, ${adultName} for registering.</h2>
    <p>You have registered ${numParticipants} participants and owe $${fees} in fees.</p>
  `;
});
