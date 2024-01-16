const download = document.querySelector('#download');
const downloadTwo = document.querySelector('#downloadTwo');

download.addEventListener('click', () => {
    const cvPath = '/resume/resume.pdf'
    const link = document.createElement('a');

    link.setAttribute('download', cvPath)
    link.href= cvPath;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link)
});

downloadTwo.addEventListener('click', () => {
    const cvPath = '/resume/resume.pdf'
    const link = document.createElement('a');

    link.setAttribute('download', cvPath)
    link.href= cvPath;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link)
})