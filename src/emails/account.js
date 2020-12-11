const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andrei.alexandrucaia@gmail.com',
        subject: 'Welcome to the app!',
        text: `Welcome to the app, ${name}. Let me know how you get along with it!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andrei.alexandrucaia@gmail.com',
        subject: 'Leaving so soon? :(',
        text: `I am sorry to hear that you\'ve decided to leave us, ${name}. Please let us know if there is anything we can improve! :)`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}