const tutorService = require('./tutor.service')

const getTutors = async (req, res, next) => {
  const { page = 1, pageSize = 4, placeId, language } = req.query
  try {
    const { tutors, totalPages, totalTutors, page: currentPage } = await tutorService.getTutors(
      Number(page),
      Number(pageSize),
      placeId,
      language
    )
    res.status(200).send({
      statusCode: 200,
      tutors,
      totalPages,
      totalTutors,
      currentPage,
    });
  } catch (error) {
    next(error)
  }
}

const getTutorById = async (req, res, next) => {
  const { tutorId } = req.params
  try {
    if (!tutorId) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Invalid params provided: tutor id is not defined'
      })
    }
    const tutor = await tutorService.getTutorById(tutorId)
    res.status(200).send({
      statusCode: 200,
      tutor
    })
  } catch (error) {
    next(error)
  }
}

const uploadFileOnCloud = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const pdfUrl = req.file.path;
    res.status(200).json({
      message: 'Certification uploaded successfully',
      pdfUrl,
    });
  } catch (error) {
    next(error);
  }
}

const createTutor = async (req, res, next) => {
  const { body } = req
  try {
    const newTutor = await tutorService.createTutor(body)
    res.status(201).send({
      statusCode: 201,
      message: 'Tutor created successfully',
      newTutor
    })
  } catch (error) {
    next(error)
  }
}

const updateTutor = async (req, res, next) => {
  const { tutorId } = req.params
  const { body } = req
  try {
    if (!tutorId) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Invalid params provided: tutor id is not defined'
      })
    }
    const updatedTutor = await tutorService.updateTutor(tutorId, body)
    res.status(200).send({
      statusCode: 200,
      message: 'Tutor updated successfully',
      updatedTutor
    })
  } catch (error) {
    next(error)
  }
}

const deleteTutor = async (req, res, next) => {
  const { tutorId } = req.params
  try {
    if (!tutorId) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Invalid params provided: tutor id is not defined'
      })
    }
    await tutorService.deleteTutor(tutorId)
    res.status(200).send({
      statusCode: 200,
      message: 'Tutor deleted successfully'
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getTutors,
  getTutorById,
  uploadFileOnCloud,
  createTutor,
  updateTutor,
  deleteTutor
}