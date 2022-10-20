import './PostItem.css'
import { FC } from 'react'
import Button from '../UI/Button/Button'
import { useHistory } from 'react-router-dom'
import { IPost } from '../../types/types'
export interface PostItemProps {
  post: IPost
  number: number
  remove: (id: number) => void
}

const PostItem: FC<PostItemProps> = ({ post: { title, body, id }, remove }) => {
  const history = useHistory()

  return (
    <div className="post">
      <div>
        <strong style={{
          wordWrap: 'break-word'
        }}>
          {id}. {title}
        </strong>
        <div style={{
          wordWrap: 'break-word'
        }}>
          {body}
        </div>
      </div>
      <div className="post__btns">
        <Button name='Open' onClick={() => history.push(`/posts/${id}`)} />
        <Button name='Delete' onClick={() => remove(id)} />
      </div>
    </div>
  )
}

export default PostItem
