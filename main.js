function getakaname () {
  var date = document.getElementById('date').value
  var gender = document.getElementById('gender').value
  document.getElementById('results').innerHTML = ''

  if (date.length === 10) {
    var days = date.split('/')
    var year = days[2].split('')

    var dd = days[0]

    var mm = days[1]

    var cc = `${year[0]}${year[1]}`

    var yy = `${year[2]}${year[3]}`

    var ly = 0

    var femaleAKA = [
      'Wachumwa',
      'Wambee',
      'Wakeli',
      'Wakatatu',
      'wakana',
      'yumaa',
      'Sabbath'
    ]

    var maleAKA = [
      'Wachu', 
      'imat', 
      'ima', 
      'imatano', 
      'ala', 
      'yum', 
      'Imam'
    ]

    var dayofweekOutput = (yy + mm + cc + dd - ly) % 7

    /* validate date form input */
    if (dd > 31 || dd <= 0) {
      document.getElementById('errorMessage').innerHTML = 'Invalid day'
    } else if (mm <= 0 || mm > 12) {
      /* month validation */
      document.getElementById('errorMessage').innerHTML = 'Invalid month'
    } else {
      document.getElementById('errorMessage').innerHTML = ''

      /*check the the gender value to user its array to get aka name*/
      if (gender === 'female') {
        var d = femaleAKA.filter((f, i) => i === dayofweekOutput && f)
        document.getElementById(
          'results'
        ).innerHTML = `${'Your AKA name is —'} ${''} ${d}`
        console.log('Your AKA name is' + ' ' + d)
      }

      if (gender === 'male') {
        var d = maleAKA.filter((m, i) => i === dayofweekOutput && m)
        document.getElementById(
          'results'
        ).innerHTML = `${'Your AKA name is —'} ${''} ${d}`
        console.log('Your AKA name is' + ' ' + d)
      }
    }
    /* end of validation */
  } else if (date.length > 1 && date.length < 10) {
    /* check if the date are in correct format and complete */
    document.getElementById('errorMessage').innerHTML = 'Invalid date'
  } 
  else {
    document.getElementById('errorMessage').innerHTML =
      'Please enter the birthday'
  }
  /* end of null date values validation */
} /* end of function */

/* target the input field */
const input = document.getElementById('date')

input.oninput = e => {
  const cursorPosition = input.selectionStart - 1
  const hasInvalidCharacters = input.value.match(/[^0-9/]/)

  if (!hasInvalidCharacters) return

  // Replace all non-digits:
  input.value = input.value.replace(/[^0-9/]/g, '')

  // Keep cursor position:
  input.setSelectionRange(cursorPosition, cursorPosition)
}
