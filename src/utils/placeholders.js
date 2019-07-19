export const dummyPostData = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'consectetur adipiscing elit. Proin ac odio sem.',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac odio sem. Praesent pretium tempor' +
    ' turpis, id commodo mauris ornare et. Praesent lobortis lorem ac varius volutpat. Praesent varius elementum egestas. Donec' +
    ' ut posuere nisl. Cras id ipsum nisi. Aliquam ultricies est neque, at rhoncus diam posuere vulputate.',
};

export function getRandomUserName() {

  let userNames = ['William Andrews', 'Anna Nelson', 'Shirley Grant', 'Steven Porter', 'Harry Stewart', 'Catherine Burton',
    'Stephanie Hernandez', 'Patrick Snyder', 'Nicole Jones', 'Ralph Ross'];

  return userNames[Math.floor(Math.random() * userNames.length)];

}

export const dummyComment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac odio sem. Praesent pretium tempor' +
  ' turpis, id commodo mauris ornare et.';
