module.exports = {
	create: (req) => {
		req.checkBody('designation').optional().notEmpty().withMessage('Designation is required')

		req.checkBody('area_of_expertise').optional().isArray().withMessage('Area of expertise must be an array')

		req.checkBody('rating').not().exists().withMessage('Rating should not be in the body')
		req.checkBody('stats').not().exists().withMessage('Stats should not be in the body')

		req.checkBody('tags').optional().isArray().withMessage('Tags must be an array')
	},

	update: (req) => {
		req.checkBody('designation').optional().notEmpty().withMessage('Designation is required')

		req.checkBody('area_of_expertise').optional().isArray().withMessage('Area of expertise must be an array')

		/* 		req.checkBody('education_qualification')
			.optional()
			.isArray()
			.withMessage('Education qualification must be an array') */

		req.checkBody('rating').not().exists().withMessage('Rating should not be in the body')
		req.checkBody('stats').not().exists().withMessage('Stats should not be in the body')

		req.checkBody('tags').optional().isArray().withMessage('Tags must be an array')

		req.checkBody('configs.notification')
			.optional()
			.isBoolean()
			.withMessage('Notification config must be a boolean')

		req.checkBody('configs.visibility').optional().notEmpty().withMessage('Visibility config is required')

		req.checkBody('visibility').optional().notEmpty().withMessage('Visibility is required')

		req.checkBody('visible_to_organisations')
			.optional()
			.isArray()
			.withMessage('visible_to_organisations must be an array')

		req.checkBody('external_session_visibility')
			.optional()
			.notEmpty()
			.withMessage('External session visibility is required')

		req.checkBody('external_mentor_visibility')
			.optional()
			.notEmpty()
			.withMessage('External mentor visibility is required')
	},
	getMenteeExtension: (req) => {
		req.checkQuery('id')
			.notEmpty()
			.withMessage('ID query parameter is empty')
			.isInt()
			.withMessage('ID must be an integer')
	},
}
