import { bookContainers } from '@pages/book'
import getLabLayout from '@src/layouts/getLabLayout'
import LabLayout from '@src/layouts/LabLayout'


bookContainers.bookList.getLayout = (page) => {
  return <LabLayout>
    {getLabLayout(page)}
  </LabLayout>
}

export default bookContainers.bookList