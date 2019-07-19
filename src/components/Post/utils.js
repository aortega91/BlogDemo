export function getImageAsset(imageId) {

  switch (imageId) {

    case 1:
      return require('../../assets/md-background-1.jpg');
    case 2:
      return require('../../assets/md-background-2.jpg');
    case 3:
      return require('../../assets/md-background-3.png');
    case 4:
      return require('../../assets/md-background-4.png');
  }

}
