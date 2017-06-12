webpackJsonpac__name_([12],{

/***/ "./src/app/special/inbox/inbox.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Inbox = (function () {
    function Inbox(el) {
        this.mailListShow = true;
        this.mailFormShow = false;
        this.mailDetailShow = false;
        this.currentFolderName = 'Inbox';
        this.$el = jQuery(el.nativeElement);
        this.initMailboxAppDemo(this.$el);
    }
    Inbox.prototype.handleComposeBtn = function (event) {
        this.repliedMessage = event || undefined;
        this.changeEmailComponents('mailForm');
    };
    Inbox.prototype.onReplyMail = function (mail) {
        this.currentMail = mail;
        this.changeEmailComponents('mailDetail');
    };
    Inbox.prototype.changeEmailComponents = function (componentName) {
        var mailState = {
            'mailList': function (that) {
                that.mailFormShow = that.mailDetailShow = false;
                that.mailListShow = true;
            },
            'mailForm': function (that) {
                that.mailListShow = that.mailDetailShow = false;
                that.mailFormShow = true;
            },
            'mailDetail': function (that) {
                that.mailListShow = that.mailFormShow = false;
                that.mailDetailShow = true;
            },
        };
        mailState[componentName](this);
    };
    Inbox.prototype.setFolderName = function (folderName) {
        this.currentFolderName = folderName;
        if (!this.mailListShow) {
            this.changeEmailComponents('mailList');
        }
    };
    /* tslint:disable */
    Inbox.prototype.initMailboxAppDemo = function ($el) {
        var showAlert = function () {
            $el.find('#app-alert')
                .removeClass('hide')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                jQuery(this).removeClass('animated bounceInLeft');
            });
        };
        setTimeout(function () { return showAlert(); }, 3000);
    };
    /* tslint:enable */
    Inbox.prototype.changeActiveItem = function () {
        this.$el.find('.nav a').on('click', function () {
            jQuery('.nav').find('.active').removeClass('active');
            jQuery(this).parent().addClass('active');
        });
    };
    Inbox.prototype.ngOnInit = function () {
        this.changeActiveItem();
    };
    Inbox = __decorate([
        core_1.Component({
            selector: '[inbox]',
            template: __webpack_require__("./src/app/special/inbox/inbox.template.html"),
            styles: [__webpack_require__("./src/app/special/inbox/inbox.style.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], Inbox);
    return Inbox;
    var _a;
}());
exports.Inbox = Inbox;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/special/inbox/inbox.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var inbox_component_1 = __webpack_require__("./src/app/special/inbox/inbox.component.ts");
var mail_list_component_1 = __webpack_require__("./src/app/special/inbox/mail-list/mail-list.component.ts");
var mail_form_component_1 = __webpack_require__("./src/app/special/inbox/mail-form/mail-form.component.ts");
var mail_detail_component_1 = __webpack_require__("./src/app/special/inbox/mail-detail/mail-detail.component.ts");
var search_pipe_1 = __webpack_require__("./src/app/special/inbox/mail-list/pipes/search-pipe.ts");
var folders_pipe_1 = __webpack_require__("./src/app/special/inbox/mail-list/pipes/folders-pipe.ts");
exports.routes = [
    { path: '', component: inbox_component_1.Inbox, pathMatch: 'full' }
];
var InboxModule = (function () {
    function InboxModule() {
    }
    InboxModule.routes = exports.routes;
    InboxModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes)],
            declarations: [
                inbox_component_1.Inbox,
                mail_list_component_1.MailList,
                mail_form_component_1.MailForm,
                mail_detail_component_1.MailDetail,
                folders_pipe_1.FoldersPipe,
                search_pipe_1.SearchPipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], InboxModule);
    return InboxModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InboxModule;


/***/ },

/***/ "./src/app/special/inbox/inbox.style.scss":
/***/ function(module, exports) {

module.exports = ".nav-email-folders > li > a {\n  color: #eceeef;\n  font-weight: 400;\n  background-color: transparent; }\n  .nav-email-folders > li > a:hover {\n    background-color: rgba(51, 51, 51, 0.25);\n    color: #f8f8f8; }\n  .nav-email-folders > li > a > .glyphicon {\n    margin-right: 5px; }\n  .nav-email-folders > li > a > .fa-circle {\n    margin-top: 3px; }\n  .nav-email-folders > li > a > .badge {\n    background-color: #d9534f;\n    font-weight: 600; }\n\n.nav-email-folders > li.active > a, .nav-email-folders > li.active > a:hover, .nav-email-folders > li.active > a:focus {\n  background-color: rgba(51, 51, 51, 0.25);\n  color: #f8f8f8;\n  font-weight: 600; }\n  .nav-email-folders > li.active > a > .badge, .nav-email-folders > li.active > a:hover > .badge, .nav-email-folders > li.active > a:focus > .badge {\n    color: #373a3c; }\n"

/***/ },

/***/ "./src/app/special/inbox/inbox.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"alert alert-warning alert-sm float-xs-right no-margin animated bounceInLeft hide\" id=\"app-alert\">\n  <button type=\"button\" class=\"ml-lg close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n  Hey! This is a <span class=\"fw-semi-bold\">real app</span> with CRUD and Search functions. Have fun!\n</div>\n<h2 class=\"page-title\">Inbox\n  <small>Ready-to-use client-side application</small>\n</h2>\n<div class=\"row\">\n  <div class=\"col-lg-3 col-xl-2 col-xs-12\">\n    <button class=\"btn btn-danger btn-block\" id=\"compose-btn\" (click)=\"handleComposeBtn()\">Compose</button>\n    <ul class=\"nav nav-pills nav-stacked nav-email-folders mt\" id=\"folders-list\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" (click)=\"setFolderName('Inbox')\">\n          Inbox\n        </a>\n      </li>\n      <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"setFolderName('Sent Mail')\">Sent</a></li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"setFolderName('Draft')\">\n          Drafts\n        </a>\n      </li>\n      <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"setFolderName('Starred')\">Starred</a></li>\n    </ul>\n    <h5 class=\"mt\">QUICK VIEW</h5>\n    <ul class=\"nav nav-pills nav-stacked nav-email-folders mb-lg\">\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\"><i class=\"fa fa-circle text-danger float-xs-right\"></i> Work </a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\"><i class=\"fa fa-circle text-white float-xs-right\"></i> Private </a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\"><i class=\"fa fa-circle text-gray-light float-xs-right\"></i> Saved </a></li>\n    </ul>\n  </div>\n  <div *ngIf=\"mailListShow\" mail-list [folderName]=\"currentFolderName\" (replyMail)=\"onReplyMail($event)\" class=\"col-lg-9 col-xl-10 col-xs-12\"></div>\n  <div *ngIf=\"mailFormShow\" mail-form (backToMailList)=\"changeEmailComponents('mailList')\" [message]=\"repliedMessage\" class=\"col-lg-9 col-xl-10 col-xs-12\"></div>\n  <div *ngIf=\"mailDetailShow\" mail-detail [mail]=\"currentMail\" (replyMessage)=\"handleComposeBtn($event)\" (backToMailList)=\"changeEmailComponents('mailList')\" class=\"col-lg-9 col-xl-10 col-xs-12\"></div>\n</div>\n"

/***/ },

/***/ "./src/app/special/inbox/mail-detail/mail-detail.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var MailDetail = (function () {
    function MailDetail() {
        this.backToMailList = new core_1.EventEmitter();
        this.replyMessage = new core_1.EventEmitter();
        this.math = Math;
    }
    MailDetail.prototype.onToBack = function () {
        this.backToMailList.emit('');
    };
    MailDetail.prototype.goToReply = function (mail) {
        this.replyMessage.emit(mail);
    };
    MailDetail.prototype.Math = function () {
        return Math.random();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MailDetail.prototype, "mail", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MailDetail.prototype, "backToMailList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MailDetail.prototype, "replyMessage", void 0);
    MailDetail = __decorate([
        core_1.Component({
            selector: '[mail-detail]',
            template: __webpack_require__("./src/app/special/inbox/mail-detail/mail-detail.template.html"),
            styles: [__webpack_require__("./src/app/special/inbox/mail-detail/mail-detail.style.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], MailDetail);
    return MailDetail;
}());
exports.MailDetail = MailDetail;


/***/ },

/***/ "./src/app/special/inbox/mail-detail/mail-detail.style.scss":
/***/ function(module, exports) {

module.exports = ".email-view {\n  margin: 12px 17px; }\n  .email-view hr {\n    margin: 5px 0; }\n  .email-view .email-body {\n    margin-top: 1rem; }\n\n.email-actions .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.widget > header h4 {\n  font-size: 14px; }\n\n.email-details img {\n  width: 30px;\n  height: 30px;\n  float: left; }\n\n.email-details-content::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.email-details-content .email {\n  color: #d2d2d2;\n  font-size: 0.75rem; }\n\n.email-details-content .receiver {\n  display: block;\n  color: #d2d2d2;\n  margin-top: -6px; }\n\n.email-details-content .email-date {\n  margin-right: 10px;\n  line-height: 28px;\n  vertical-align: middle; }\n\n.email-attachments .attachment img {\n  display: block; }\n\n.email-attachments .attachment .title {\n  margin: 0;\n  font-weight: bold; }\n"

/***/ },

/***/ "./src/app/special/inbox/mail-detail/mail-detail.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"clearfix mb-xs\">\n  <a class=\"btn btn-transparent btn-sm width-50 float-xs-left\" id=\"back-btn\" (click)=\"onToBack()\">\n    <i class=\"fa fa-angle-left fa-lg\"></i>\n  </a>\n</div>\n<section widget class=\"widget widget-email\">\n  <header>\n    <h4>{{mail.subject}}</h4>\n    <div class=\"widget-controls\">\n      <a href=\"#\"><i class=\"fa fa-print\"></i></a>\n    </div>\n  </header>\n  <div class=\"widget-body\">\n    <div id=\"email-view\" class=\"email-view\">\n      <div class=\"email-details clearfix\">\n        <div class=\"email-details-content\">\n          <span class=\"thumb thumb-sm float-xs-left\">\n            <img class=\"rounded-circle\" src=\"assets/img/people/a5.jpg\" alt=\"Philip Horbacheuski\">\n          </span>\n          <div class=\"float-xs-left\">\n            <strong>{{mail.sender}}</strong>\n            <span *ngIf=\"mail.senderMail\" class=\"email\">&lt;{{mail.senderMail}}&gt;</span>\n            <span class=\"receiver\">to Wrapbootstrap</span>\n          </div>\n          <div class=\"email-actions float-xs-right\">\n            <div class=\"btn-group\">\n              <button id=\"email-opened-reply\" class=\"btn btn-sm btn-transparent\" (click)=\"goToReply(mail)\">\n                <i class=\"fa fa-reply mr-xs\"></i> Reply\n              </button>\n              <button class=\"btn btn-sm btn-transparent dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"fa fa-angle-down\"></i>\n              </button>\n              <ul class=\"dropdown-menu float-xs-right\">\n                <li><a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-reply reply-btn\"></i> Reply</a></li>\n                <li><a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-arrow-right reply-btn\"></i> Forward</a></li>\n                <li><a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-print\"></i> Print</a></li>\n                <li class=\"dropdown-divider\"></li>\n                <li><a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-ban\"></i> Spam</a></li>\n                <li><a class=\"dropdown-item\" href=\"#\"><i class=\"glyphicon glyphicon-trash\"></i> Delete</a></li>\n              </ul>\n            </div>\n          </div>\n          <time class=\"email-date float-xs-right\">\n            0:30\n          </time>\n        </div>\n      </div>\n      <div class=\"email-body\">\n        <div class=\"email-body\" [innerHTML]=\"mail.body\"></div>\n      </div>\n      <div *ngIf=\"!mail.body\" class=\"email-body\">\n        {{mail.subject}}\n      </div>\n      <div class=\"email-attachments\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <hr *ngIf=\"mail.attachments\">\n            <p  *ngIf=\"mail.attachments\" class=\"details\"><strong>{{mail.attachments.length}} attachments</strong> &nbsp;-&nbsp; <a href=\"#\">Download all attachments</a>\n              &nbsp;&nbsp;&nbsp;<a href=\"#\">View all Images</a></p>\n            <section *ngFor=\"let attachment of mail.attachments; let i = index\" class=\"attachment\">\n              <img class=\"img-fluid\" src=\"{{attachment}}\" alt=\"\">\n              <h5 class=\"title\">some-cool-image{{i + 1}}.jpg</h5>\n              <p class=\"details\">\n                568K  &nbsp;&nbsp;\n                <a href=\"#\">View</a> &nbsp;&nbsp;\n                <a href=\"#\">Download</a>\n              </p>\n            </section>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ },

/***/ "./src/app/special/inbox/mail-form/mail-form.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var core_2 = __webpack_require__("./node_modules/@angular/core/index.js");
var core_3 = __webpack_require__("./node_modules/@angular/core/index.js");
var MailForm = (function () {
    function MailForm() {
        this.backToMailList = new core_3.EventEmitter();
        this.sender = '';
        this.subject = '';
        this.body = 'There are no implementations' +
            ' of Wysiwyg editors in Angular 2 version yet.' +
            ' So we hope it will appear soon.';
    }
    MailForm.prototype.onToBack = function () {
        console.log('qwerty');
        this.backToMailList.emit('');
    };
    MailForm.prototype.ngOnInit = function () {
        if (this.message) {
            this.sender = this.message.sender;
            this.subject = 'Re: ' + this.message.subject;
            var span = document.createElement('span');
            span.innerHTML = this.message.body;
            this.body = span.innerText;
        }
    };
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Object)
    ], MailForm.prototype, "backToMailList", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Object)
    ], MailForm.prototype, "message", void 0);
    MailForm = __decorate([
        core_1.Component({
            selector: '[mail-form]',
            template: __webpack_require__("./src/app/special/inbox/mail-form/mail-form.template.html"),
            styles: [__webpack_require__("./src/app/special/inbox/mail-form/mail-form.style.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], MailForm);
    return MailForm;
}());
exports.MailForm = MailForm;


/***/ },

/***/ "./src/app/special/inbox/mail-form/mail-form.style.scss":
/***/ function(module, exports) {

module.exports = ".compose-view {\n  margin: 12px 17px; }\n\n#wysiwyg {\n  resize: none; }\n"

/***/ },

/***/ "./src/app/special/inbox/mail-form/mail-form.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"clearfix mb-xs\">\n  <a class=\"btn btn-transparent btn-sm width-50 float-xs-left\" id=\"back-btn\" (click)=\"onToBack()\">\n    <i class=\"fa fa-angle-left fa-lg\"></i>\n  </a>\n</div>\n<section widget class=\"widget widget-email\">\n  <header id=\"widget-email-header\">\n    <h4>Compose <span class=\"fw-semi-bold\">New</span></h4>\n  </header>\n  <div class=\"widget-body\" id=\"mailbox-content\">\n    <div class=\"compose-view\" id=\"compose-view\">\n      <form id=\"email-compose\" class=\"form-email-compose\" method=\"get\" action=\"#\">\n        <div class=\"form-group\">\n          <input type=\"email\" id=\"input-to\" placeholder=\"To\" [(ngModel)]=\"sender\" name=\"sender\" class=\"input-transparent form-control\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" id=\"input-subject\" placeholder=\"Subject\" [(ngModel)]=\"subject\"  name=\"subject\" class=\"input-transparent form-control\">\n        </div>\n        <div class=\"form-group\">\n          <textarea rows=\"10\" class=\"form-control input-transparent\" id=\"wysiwyg\" placeholder=\"Message\">{{ body }}</textarea>\n        </div>\n        <div class=\"clearfix\">\n          <div class=\"btn-toolbar float-xs-right\">\n            <button type=\"reset\" id=\"compose-discard-button\" (click)=\"onToBack()\" class=\"btn btn-transparent\">Discard</button>\n            <button type=\"button\" id=\"compose-save-button\" class=\"btn btn-transparent\">&nbsp;&nbsp;Save&nbsp;&nbsp;</button>\n            <button type=\"submit\" id=\"compose-send-button\" class=\"btn btn-danger\">&nbsp;&nbsp;&nbsp;Send&nbsp;&nbsp;&nbsp;</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n"

/***/ },

/***/ "./src/app/special/inbox/mail-list/mail-list.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var core_2 = __webpack_require__("./node_modules/@angular/core/index.js");
var core_3 = __webpack_require__("./node_modules/@angular/core/index.js");
var MAILS = [
    { id: 1,
        'sender': 'Philip Horbacheuski',
        'senderMail': 'philip.horbacheuski@example.com',
        'subject': 'Hi, Welcome to Google Mail',
        'date': '18:31',
        'paperclip': true,
        'attachment': true,
        'unread': true,
        'starred': true,
        'folderId': 1,
        'selected': false,
        'attachments': ['assets/img/jpeg/1.jpg', 'assets/img/jpeg/2.jpg'],
        'body': '<p>Projecting surrounded literature ' +
            'yet delightful alteration but bed men. Open are' +
            ' from long why cold. If must snug by upon sang ' +
            'loud left. As me do preference entreaties compliment ' +
            'motionless ye literature. Day behaviour explained law' +
            ' remainder.</p>    <p><strong>On then sake' +
            ' home</strong> is am leaf. Of suspicion do' +
            ' departure at extremely he believing. Do know ' +
            'said mind do rent they oh hope of. General enquire' +
            ' picture letters garrets on offices of no on.</p>' +
            ' <p>All the best,</p> <p>Vitaut the Great, CEO,' +
            ' <br>Fooby Inc.</p>' },
    { 'id': 2,
        'sender': 'StackExchange',
        'subject': 'New Python questions for this week!',
        'date': 'Aug 14',
        'paperclip': true,
        'unread': true,
        'attachment': true,
        'timestamp': 1376508566000,
        'folderId': 1,
        'selected': false,
        'attachments': ['assets/img/jpeg/3.jpg'],
        'body': '<h1>THIS IS HTML!!!!</h1>' },
    { 'id': 3,
        'sender': 'notifications@facebook.com',
        'senderMail': 'notifications@facebook.com',
        'subject': 'Someone just commented on your photo!',
        'date': 'Aug 7',
        'selected': false,
        'unread': false,
        'timestamp': 1375877213000,
        'folderId': 1 },
    { 'id': 4,
        'sender': 'Twitter',
        'subject': '@hackernews is now following you on Twitter',
        'date': 'Jul 31',
        'starred': true,
        'unread': true,
        'selected': false,
        'timestamp': 1375261974000,
        'folderId': 1 },
    { 'id': 5,
        'sender': 'LinkedIn',
        'subject': 'Jobs you may be interested in',
        'date': 'May 12',
        'selected': false,
        'unread': false,
        'timestamp': 1373634231000,
        'folderId': 1 },
    { 'id': 6,
        'sender': 'Naevius Victorsson',
        'subject': 'Front no party young abode state up',
        'date': 'May 1',
        'starred': true,
        'unread': false,
        'selected': false,
        'timestamp': 1373516566000,
        'folderId': 1 },
    { 'id': 7,
        'sender': 'Nikola Foley',
        'subject': 'Quiet led own cause three him',
        'date': 'Apr 23',
        'paperclip': true,
        'attachment': true,
        'attachments': ['assets/img/jpeg/5.jpg', 'assets/img/jpeg/4.jpg'],
        'unread': false,
        'selected': false,
        'timestamp': 1374508566000,
        'folderId': 1 },
    { 'id': 8,
        'sender': 'Ernst Hardy',
        'subject': 'Raising say express had chiefly detract demands she',
        'date': 'Apr 20',
        'selected': false,
        'unread': false,
        'timestamp': 1373877213000,
        'folderId': 1 },
    { 'id': 9,
        'sender': 'Lubbert Fuller',
        'subject': 'Civility vicinity graceful is it at',
        'date': 'Jul 3',
        'starred': true,
        'selected': false,
        'unread': false,
        'timestamp': 1376516566000,
        'folderId': 2 },
    { 'id': 10,
        'sender': 'Tatenda Guerra',
        'subject': 'Improve up at to on mention perhaps raising',
        'date': 'Jul 13',
        'attachment': true,
        'attachments': ['assets/img/jpeg/6.jpg'],
        'selected': false,
        'unread': false,
        'timestamp': 1376508566000,
        'folderId': 3 },
    { 'id': 12,
        'sender': 'Ladislao Roche',
        'subject': 'Way building not get formerly her peculiar',
        'date': 'Jul 18',
        'selected': false,
        'unread': true,
        'timestamp': 1375877213000,
        'folderId': 2 },
    { 'id': 13,
        'sender': 'Areli.Tanzi@gmail.com',
        'senderMail': 'Areli.Tanzi@gmail.com',
        'subject': 'Up uncommonly prosperous sentiments simplicity',
        'date': 'Jul 24',
        'starred': true,
        'attachment': true,
        'attachments': ['assets/img/jpeg/9.jpg'],
        'selected': false,
        'unread': false,
        'timestamp': 1375261974000,
        'folderId': 2 },
    { 'id': 14,
        'sender': 'Oluwaseyi Tremble',
        'subject': 'Reasonable appearance companions oh',
        'date': 'Jul 28',
        'selected': false,
        'unread': false,
        'timestamp': 1373634231000,
        'folderId': 3 }
];
var MailList = (function () {
    function MailList(el) {
        this.replyMail = new core_3.EventEmitter();
        this.mails = MAILS;
        this.$el = jQuery(el.nativeElement);
    }
    MailList.prototype.openMail = function (mail) {
        mail.unread = false;
        this.replyMail.emit(mail);
    };
    MailList.prototype.selectMail = function (mail) {
        mail.selected = mail.selected ? false : true;
        this.checkToggleAll();
    };
    MailList.prototype.selectAll = function () {
        var checked = this.$toggleAll.prop('checked');
        this.toggleAll(checked);
    };
    MailList.prototype.checkToggleAll = function () {
        var checked = true;
        // TODO select read (all)
        this.$el.find('.toggle-one').each(function (i, el) {
            if (!jQuery(el).prop('checked') && checked) {
                checked = false;
            }
        });
        this.$toggleAll.prop('checked', checked);
    };
    MailList.prototype.toggleAll = function (checked) {
        for (var _i = 0, _a = this.mails; _i < _a.length; _i++) {
            var mail = _a[_i];
            mail.selected = checked;
        }
        this.$toggleAll.prop('checked', checked);
    };
    MailList.prototype.selectRead = function () {
        this.toggleAll(false);
        this.mails.filter(function (mail) { return !mail.unread; }).forEach(function (mail) { return mail.selected = true; });
        this.checkToggleAll();
    };
    MailList.prototype.selectUnread = function () {
        this.toggleAll(false);
        this.mails.filter(function (mail) { return mail.unread; }).forEach(function (mail) { return mail.selected = true; });
        this.checkToggleAll();
    };
    MailList.prototype.markSelectedAsRead = function () {
        this.mails.filter(function (mail) { return mail.selected; }).forEach(function (mail) { return mail.unread = false; });
    };
    MailList.prototype.markSelectedAsUnread = function () {
        this.mails.filter(function (mail) { return mail.selected; }).forEach(function (mail) { return mail.unread = true; });
    };
    MailList.prototype.deleteEmails = function () {
        var mails = [];
        this.mails.forEach(function (mail) {
            if (!mail.selected) {
                mails.push(mail);
            }
        });
        this.mails = mails;
    };
    MailList.prototype.ngOnInit = function () {
        this.$toggleAll = this.$el.find('#toggle-all');
    };
    MailList.prototype.ngOnChanges = function (event) {
        if ('folderName' in event) {
            if (!(event.folderName.previousValue instanceof Object)) {
                this.toggleAll(false);
            }
        }
    };
    MailList.prototype.changeStarStatus = function (mail) {
        mail.starred = !mail.starred;
    };
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Object)
    ], MailList.prototype, "replyMail", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Object)
    ], MailList.prototype, "folderName", void 0);
    MailList = __decorate([
        core_1.Component({
            selector: '[mail-list]',
            template: __webpack_require__("./src/app/special/inbox/mail-list/mail-list.template.html"),
            styles: [__webpack_require__("./src/app/special/inbox/mail-list/mail-list.style.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_3.ElementRef !== 'undefined' && core_3.ElementRef) === 'function' && _a) || Object])
    ], MailList);
    return MailList;
    var _a;
}());
exports.MailList = MailList;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/special/inbox/mail-list/mail-list.style.scss":
/***/ function(module, exports) {

module.exports = ".btn-sm {\n  font-size: 12px; }\n\n.dropdown-toggle {\n  box-shadow: none; }\n  .dropdown-toggle:after {\n    display: none; }\n\n.dropdown-item {\n  box-sizing: border-box;\n  cursor: pointer; }\n  .dropdown-item:hover {\n    color: #f8f8f8 !important; }\n\n.nav-link {\n  cursor: pointer; }\n\n.table-emails {\n  margin-bottom: 0; }\n  .table-emails thead > tr > th:first-child {\n    padding-left: 5px; }\n  .table-emails tbody > tr > td:first-child {\n    width: 45px; }\n  .table-emails tbody > tr > td:last-child {\n    padding-right: 17px; }\n  .table-emails tr {\n    height: 40px; }\n  .table-emails td,\n  .table-emails th {\n    padding: 10px; }\n  .table-emails td > .abc-checkbox,\n  .table-emails th > .abc-checkbox {\n    top: 8px; }\n    .table-emails td > .abc-checkbox label,\n    .table-emails th > .abc-checkbox label {\n      top: -7px;\n      left: 11px; }\n    .table-emails td > .abc-checkbox > label:before,\n    .table-emails td > .abc-checkbox > label:after,\n    .table-emails th > .abc-checkbox > label:before,\n    .table-emails th > .abc-checkbox > label:after {\n      margin-left: 0px; }\n  .table-emails .select-mail {\n    padding-left: 5px; }\n  .table-emails .name,\n  .table-emails .subject,\n  .table-emails .date {\n    cursor: pointer; }\n  .table-emails .date {\n    text-align: right;\n    min-width: 65px; }\n  .table-emails .unread {\n    font-weight: 600;\n    color: #f8f8f8; }\n  .table-emails .favorite {\n    text-align: center; }\n  .table-emails .starred {\n    color: #818a91;\n    cursor: pointer; }\n    .table-emails .starred:hover {\n      color: #f8f8f8; }\n    .table-emails .starred .fa-star {\n      color: #f0ad4e; }\n\n.widget-email-count {\n  display: inline-block;\n  margin: 0;\n  font-size: 0.92rem;\n  color: #d2d2d2;\n  line-height: 29px; }\n  .widget-email-count + .widget-email-pagination {\n    margin-left: 10px;\n    border-left: 1px solid #ddd;\n    padding-left: 15px;\n    border-radius: 0;\n    vertical-align: -9px; }\n\n.widget-email-pagination {\n  margin: 0; }\n\n.widget-body.mailbox-body {\n  margin: 0 -17px -12px; }\n"

/***/ },

/***/ "./src/app/special/inbox/mail-list/mail-list.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"clearfix mb-xs\">\n  <div class=\"float-xs-right\" id=\"folder-stats\">\n    <p class=\"widget-email-count\">Showing 1 - 10 of 96 messages</p>\n    <ul class=\"pagination pagination-sm widget-email-pagination\">\n      <li class=\"prev disabled page-item\"><a class=\"page-link\" href=\"#\"><i class=\"fa fa-chevron-left\"></i></a></li>\n      <li class=\"active page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n      <li class=\"next page-item\"><a class=\"page-link\" href=\"#\"><i class=\"fa fa-chevron-right\"></i></a></li>\n    </ul>\n  </div>\n</div>\n<section widget class=\"widget widget-email\">\n  <header id=\"widget-email-header\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"btn-group\">\n          <a class=\"btn btn-secondary btn-sm dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">\n            Select\n            <i class=\"fa fa-angle-down \"></i>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a class=\"dropdown-item\" (click)=\"toggleAll(true)\">All</a></li>\n            <li><a class=\"dropdown-item\" (click)=\"toggleAll(false)\">None</a></li>\n            <li class=\"dropdown-divider\"></li>\n            <li><a class=\"dropdown-item\" (click)=\"selectRead()\">Read</a></li>\n            <li><a class=\"dropdown-item\" (click)=\"selectUnread()\">Unread</a></li>\n          </ul>\n        </div>\n        <div class=\"btn-group\">\n          <a class=\"btn btn-sm btn-secondary dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">\n            Actions\n            <i class=\"fa fa-angle-down \"></i>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a class=\"dropdown-item\" href=\"#\">Reply</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\">Forward</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\">Archive</a></li>\n            <li class=\"dropdown-divider\"></li>\n            <li><a class=\"dropdown-item\" (click)=\"markSelectedAsRead()\">Mark As Read</a></li>\n            <li><a class=\"dropdown-item\" (click)=\"markSelectedAsUnread()\">Mark As Unread</a></li>\n            <li class=\"dropdown-divider\"></li>\n            <li><a class=\"dropdown-item\" (click)=\"deleteEmails()\">Delete</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-8\">\n        <input class=\"form-control form-control-sm input-transparent width-200 float-xs-right\" id=\"mailbox-search\" [(ngModel)]=\"searchText\" type=\"text\" placeholder=\"Search Messages\">\n      </div>\n    </div>\n  </header>\n  <div class=\"widget-body mailbox-body\" id=\"mailbox-content\">\n    <table class=\"table table-striped table-emails table-hover\" id=\"folder-view\" >\n      <thead>\n      <tr>\n        <th colspan=\"3\" id=\"folder-actions\">\n          <div class=\"checkbox abc-checkbox\">\n            <input id=\"toggle-all\" type=\"checkbox\" (click)=\"selectAll()\">\n            <label for=\"toggle-all\"></label>\n          </div>\n        </th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let mail of mails | FoldersPipe : folderName | SearchPipe : searchText\" [ngClass]=\"{'unread': mail.unread}\">\n        <td class=\"select-mail\">\n          <div class=\"checkbox abc-checkbox\">\n            <input class=\"toggle-one\" type=\"checkbox\" id=\"checkbox{{mail.id}}\" [checked]=\"mail.selected\"  (click)=\"selectMail(mail)\">\n            <label attr.for=\"checkbox{{mail.id}}\"></label>\n          </div>\n        </td>\n        <td class=\"favorite\"><span class=\"starred\"><i class=\"fa\" [ngClass]=\"{'fa-star': mail.starred, 'fa-star-o': !mail.starred}\" (click)=\"changeStarStatus(mail)\"></i></span></td>\n        <td class=\"name hidden-xs-down\" (click)=\"openMail(mail)\">{{mail.sender}}</td>\n        <td class=\"subject\" (click)=\"openMail(mail)\">{{mail.subject}}</td>\n        <td class=\"hidden-xs-down\">\n          <i [ngClass]=\"{'fa fa-paperclip': mail.paperclip}\"></i>\n        </td>\n        <td class=\"date\">{{mail.date}}</td>\n      </tr>\n      <tr *ngIf=\"mails.length < 1\">\n          <td colspan=\"12\">\n              Nothing here yet\n          </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n"

/***/ },

/***/ "./src/app/special/inbox/mail-list/pipes/folders-pipe.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var FOLDERS = [
    { 'name': 'Inbox', 'order': 0, 'id': 1, 'unread': 2 },
    { 'name': 'Sent Mail', 'order': 6, 'id': 2, 'unread': 0 },
    { 'name': 'Draft', 'order': 7, 'id': 3, 'unread': 3 },
    { 'name': 'Trash', 'order': 8, 'id': 4, 'unread': 0 }
];
var FoldersPipe = (function () {
    function FoldersPipe() {
        this.folders = FOLDERS;
    }
    FoldersPipe.prototype.transform = function (value, args) {
        var _this = this;
        var folderName = args;
        if (value) {
            return value.filter(function (conversation) {
                /* tslint:disable */
                if (folderName == 'Starred') {
                    return conversation.starred;
                }
                else {
                    var folder = _this.folders.filter(function (folder) { return folder.name == folderName; });
                    return folder[0].id == conversation.folderId;
                }
            });
        }
    };
    FoldersPipe = __decorate([
        core_1.Pipe({
            name: 'FoldersPipe'
        }), 
        __metadata('design:paramtypes', [])
    ], FoldersPipe);
    return FoldersPipe;
}());
exports.FoldersPipe = FoldersPipe;


/***/ },

/***/ "./src/app/special/inbox/mail-list/pipes/search-pipe.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (mail) {
                if (mail.sender) {
                    return mail.sender.search(searchText) !== -1;
                }
                if (mail.subject) {
                    return mail.subject.search(searchText) !== -1;
                }
            });
        }
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: 'SearchPipe'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;


/***/ }

});
//# sourceMappingURL=12.map