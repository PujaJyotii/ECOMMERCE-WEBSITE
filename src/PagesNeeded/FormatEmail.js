const FormatEmail = (email) => {
    return email.replaceAll('@', '').replaceAll('.', '')
}




export default FormatEmail;