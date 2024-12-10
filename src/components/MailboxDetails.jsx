import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MailboxDetails = ({ mailboxData }) => {
    const { id } = useParams()
    const [mailboxes, setMailboxes] = useState({})

    useEffect(() => {
        const mailboxById = mailboxData.find((mailbox) => {
            return mailbox._id === Number(id)
        })
       
        setMailboxes(mailboxById)
    }, [])

  return (
    <>
    <div>Mailbox Details</div>
    <h2>Mailbox Owner: {mailboxes.boxHolder}</h2>
    <h4>Mailbox Size: {mailboxes.boxSize}</h4>
    </>
  )
}

export default MailboxDetails