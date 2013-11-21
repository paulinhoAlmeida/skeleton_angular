angular.scenario.dsl 'expectClass', -> (klass, selector, label) ->
	expect(element(selector, label).prop('classList')).toContain klass

angular.scenario.dsl 'expectViewText', -> (text) ->
	expect(using('[ng-view]').element(@selector||'').text()).toMatch text

angular.scenario.dsl 'expectLink', -> (link, text) ->
	a = using(@selector||'').element("[href='#{link}']")
	expect(a.count()).toBe 1
	expect(a.text()).toMatch text

describe 'Tech Grind app', ->
	describe 'root page', ->
		beforeEach -> browser().navigateTo '/'
		it 'shows the home page', -> expect(browser().location().url()).toBe '/home'

	describe 'register and activate', ->
		beforeEach -> browser().navigateTo '#/register'
		it 'registration successful', ->
			input('registerdata.fullname').enter('test user tg ')
			input('registerdata.email').enter('martin@ekita.co')
			input('registerdata.password').enter('abc123')
			input('registerdata.password2').enter('abc123')
			element('#registerhere').click()
			expect(element('#newuserid').text()).toContain 'test.user.tg'
			element('#activation_link').click()
			expect(element('#activation').text()).toContain 'user is activated'

	describe 'home page', ->
		beforeEach -> browser().navigateTo '#/home'
		it 'has a navbar', ->
			expect(element('.navbar').text()).toContain 'Register'
			expect(element('.navbar').text()).toContain 'Login'
		it 'has a menu', ->
		it 'has a footer', ->
			# About
			using('footer').expectLink '#/about', 'About Us'
			using('footer').expectLink 'https://twitter.com/Tech_Grind', 'Twitter'
			using('footer').expectLink 'http://www.facebook.com/techgrind/', 'Facebook'
			using('footer').expectLink 'https://plus.google.com/114529345031512116214/posts/', 'Google+'
			# Support
			using('footer').expectLink '#/faq', 'FAQ'
			using('footer').expectLink '#/feedback', 'Feedback'
			using('footer').expectLink '#/contact', 'Contact Us'
			# # Legal
			# using('footer').expectLink 'javascript:;', 'License'
			# using('footer').expectLink 'javascript:;', 'Terms of Use'
			# using('footer').expectLink 'javascript:;', 'Privacy Policy'
			# using('footer').expectLink 'javascript:;', 'Security'
			# # Settings
			# using('footer').expectLink 'javascript:;', 'Login'
			# using('footer').expectLink 'javascript:;', 'Sign Up'
			# using('footer').expectLink 'javascript:;', 'Account Settings'
			# using('footer').expectLink 'javascript:;', 'Privacy Settings'
		it 'shows social media buttons', -> expectViewText 'Follow Us'
		it 'shows Top happenings', -> expectViewText 'Top Happenings'
		it 'shows Latest Content', -> expectViewText 'Latest Content'
		it 'highlights the home menu and only that', ->
			expect(element('#menu [class="active"]').text()).toEqual 'Home'

	describe 'navbar login', ->
		beforeEach -> browser().navigateTo '#/home'
		it 'logs in successfully', ->
			element('#login-link').click()
			input('userid').enter('test.user.tg')
			input('password').enter('abc123')
			element('#login-submit').click()
			expect(element('#show-user-name:visible').count()).toBe 1
			expect(element('#show-settings:visible').count()).toBe 1
			expect(element('#show-register').css('display')).toBe 'none'
			expect(element('#show-login').css('display')).toBe 'none'
			# user-name and Settings should be visible, Register and Login should be hidden

	describe 'user deleted', ->
		beforeEach -> browser().navigateTo '#/test-cleanup'
		it 'cleanup successful', ->
			expect(element('#show-user-name').css('display')).toBe 'none'
			expect(element('#show-settings').css('display')).toBe 'none'
			expect(element('#show-register:visible').count()).toBe 1
			expect(element('#show-login:visible').count()).toBe 1
			expect(element('#show-user-name').text()).toContain 'User'
			# user-name and Settings should be hidden, Register and Login should be hidden


	describe 'regions', ->
		beforeEach -> browser().navigateTo '#/regions'

	describe 'a specific region', ->
		beforeEach -> browser().navigateTo '#/regions/thailand'

	describe 'regions', ->
		beforeEach -> browser().navigateTo '#/regions'
		xit 'highlights the regions menu and only that', ->
			expect(element('#menu [class="active"]').text()).toEqual 'Regions'

	describe 'calendar', ->
		beforeEach -> browser().navigateTo '#/calendar'
		it 'highlights the calendar menu and only that', ->
			expect(element('#menu [class="active"]').text()).toEqual 'Calendar'

	describe 'events', ->
		beforeEach -> browser().navigateTo '#/events'
		it 'highlights the events menu and only that', ->
			expect(element('#menu [class="active"]').text()).toEqual 'Events'
		it 'show upcoming events', -> expectViewText 'Events'
		it 'show upcoming regional events/workshops', -> expectViewText 'Workshops'
		it 'conferences', -> expectViewText 'Conferences'

	describe 'resources', ->
		beforeEach -> browser().navigateTo '#/resources'
		it 'highlights the resources menu and only that', ->
			expect(element('#menu [class="active"]').text()).toEqual 'Resources'

	describe 'media', ->
		beforeEach -> browser().navigateTo '#/media'
		it 'highlights the media menu and only that', ->
			expect(element('#menu [class="active"]').text()).toEqual 'Media'

	describe 'partners', ->
		beforeEach -> browser().navigateTo '#/partners'
		it 'highlights the partners menu and only that', ->
			expect(element('#menu [class="active"]').text()).toEqual 'Partners'
		xit 'shows Global Partners'
		xit 'has Connect With Us form'

