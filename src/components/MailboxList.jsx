import { Link } from 'react-router-dom'

const MailboxList = (props) => {
  return (
    <>
    <div>MailboxList</div>
    <ul>
        {props.mailboxes.map((mailbox, index) => (
            <Link key={index} to={`/mailboxes/${mailbox._id}`}>
            <li key={mailbox.boxHolder}>{mailbox.boxHolder}</li>
            </Link>
        ))}
    </ul>
    </>
  )
}

export default MailboxList