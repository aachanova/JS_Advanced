window.addEventListener("load", solve);

function solve() {
  const typeElement = document.getElementById('type');
  const intensityElement = document.getElementById('intensity');
  const calorieslement = document.getElementById('calories');
  const durationElement = document.getElementById('duration');
  const dateElement = document.getElementById('date');
  const addActivityBtnElement = document.getElementById('add-activity');
  const ulPrevElement = document.getElementById('preview-activity');
  const tbodyActiveElement = document.getElementById('activities-table');


  addActivityBtnElement.addEventListener('click', onAdd);

  function onAdd(e) {
    e.preventDefault();

    const type = typeElement.value
    const intensity = intensityElement.value
    const duration = durationElement.value
    const date = dateElement.value
    const calories = calorieslement.value

    if (!type || !intensity || !calories || !duration || !date) {
      return;
    }

    const pActivityPrevElement = document.createElement('p');
    pActivityPrevElement.textContent = `Activity: ${type}`;

    const pIntensityPrevElement = document.createElement('p');
    pIntensityPrevElement.textContent = `Intensity: ${intensity}`;

    const pDurationPrevElement = document.createElement('p');
    pDurationPrevElement.textContent = `Duration: ${duration} min.`;

    const pDatePrevElement = document.createElement('p');
    pDatePrevElement.textContent = `Date: ${date}`;

    const pCaloriesPrevElement = document.createElement('p');
    pCaloriesPrevElement.textContent = `Calories: ${calories}`;

    const articlePrevElement = document.createElement('article');

    const editBtnElement = document.createElement('button');
    editBtnElement.classList.add('edit-btn');
    editBtnElement.textContent = 'Edit';
    editBtnElement.addEventListener('click', onEdit);

    const nextBtnElement = document.createElement('button');
    nextBtnElement.classList.add('next-btn');
    nextBtnElement.textContent = 'Next';
    nextBtnElement.addEventListener('click', onNext);

    const divPrevElement = document.createElement('div');
    divPrevElement.classList.add('btn-container');

    const liPrevElement = document.createElement('li');

    articlePrevElement.appendChild(pActivityPrevElement);
    articlePrevElement.appendChild(pIntensityPrevElement);
    articlePrevElement.appendChild(pDurationPrevElement);
    articlePrevElement.appendChild(pDatePrevElement);
    articlePrevElement.appendChild(pCaloriesPrevElement);

    divPrevElement.appendChild(editBtnElement);
    divPrevElement.appendChild(nextBtnElement);

    liPrevElement.appendChild(articlePrevElement);
    liPrevElement.appendChild(divPrevElement);

    ulPrevElement.appendChild(liPrevElement);

    typeElement.value = '';
    intensityElement.value = '';
    durationElement.value = '';
    dateElement.value = '';
    calorieslement.value = '';

    addActivityBtnElement.disabled = true;

    function onEdit() {
      typeElement.value = type;
      intensityElement.value = intensity;
      durationElement.value = duration;
      dateElement.value = date;
      calorieslement.value = calories;

      liPrevElement.remove();
      addActivityBtnElement.disabled = false;
    }

    function onNext() {
      liPrevElement.remove();
      
      const tdTypeElement = document.createElement('td');
      const tdDurationElement = document.createElement('td');
      const tdCaloriesElement = document.createElement('td');
      const tdDateElement = document.createElement('td');
      const tdIntensityElement = document.createElement('td');
      const delBtnElement = document.createElement('button');
      const tdBtnContainerElement = document.createElement('td');
      const trActiveElement = document.createElement('tr');

      delBtnElement.addEventListener('click', onDelete);

      tdTypeElement.classList.add('type-cell');
      tdDurationElement.classList.add('duration-cell');
      tdCaloriesElement.classList.add('calories-cell');
      tdDateElement.classList.add('date-cell');
      tdIntensityElement.classList.add('intensity-cell');
      tdBtnContainerElement.classList.add('btn-cell');
      delBtnElement.classList.add('delete-btn');

      tdTypeElement.textContent = type;
      tdDurationElement.textContent = duration;
      tdCaloriesElement.textContent = calories;
      tdDateElement.textContent = date;
      tdIntensityElement.textContent = intensity;
      delBtnElement.textContent = 'Delete';

      tdBtnContainerElement.appendChild(delBtnElement);

      trActiveElement.appendChild(tdTypeElement);
      trActiveElement.appendChild(tdDurationElement);
      trActiveElement.appendChild(tdCaloriesElement);
      trActiveElement.appendChild(tdDateElement);
      trActiveElement.appendChild(tdIntensityElement);
      trActiveElement.appendChild(tdBtnContainerElement);      

      tbodyActiveElement.appendChild(trActiveElement);

      addActivityBtnElement.disabled = false;

      function onDelete() {
        trActiveElement.remove();
      }
    }
  }
}
