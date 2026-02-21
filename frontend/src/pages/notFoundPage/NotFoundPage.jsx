import page_not_found from '../../assets/page_not_found_img.jpg'

const NotFoundPage = () => {

  return (
    <img
      className="vh-100 vw-100 object-fit-cover d-block"
      src={page_not_found}
      alt="page not found picture"
    />
  )

}

export default NotFoundPage