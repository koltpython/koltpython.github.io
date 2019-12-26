function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alumni-alumni-module"], {
  /***/
  "./src/app/alumni/alumni.component.ts":
  /*!********************************************!*\
    !*** ./src/app/alumni/alumni.component.ts ***!
    \********************************************/

  /*! exports provided: AlumniComponent */

  /***/
  function srcAppAlumniAlumniComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlumniComponent", function () {
      return AlumniComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AlumniComponent_div_10_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var member_r58 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r58.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("<", member_r58.kuId, ">");
      }
    }

    function AlumniComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlumniComponent_div_10_p_4_Template, 4, 2, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var term_r56 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", term_r56.term, " ", term_r56.year, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", term_r56.teamMembers);
      }
    }

    function AlumniComponent_div_13_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var member_r61 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r61.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("<", member_r61.kuId, ">");
      }
    }

    function AlumniComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlumniComponent_div_13_p_4_Template, 4, 2, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var term_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", term_r59.term, " ", term_r59.year, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", term_r59.alumni);
      }
    }

    var AlumniComponent =
    /*#__PURE__*/
    function () {
      function AlumniComponent() {
        _classCallCheck(this, AlumniComponent);

        this.teamMembers = [{
          term: 'Spring',
          year: 2019,
          teamMembers: [{
            name: 'Ahmet Uysal',
            kuId: 'auysal16'
          }, {
            name: 'İpek Köprülülü',
            kuId: 'ikoprululu16'
          }]
        }, {
          term: 'Fall',
          year: 2019,
          teamMembers: [{
            name: 'Ahmet Uysal',
            kuId: 'auysal16'
          }, {
            name: 'Ceren Kocaoğullar',
            kuId: 'ckocaogullar15'
          }, {
            name: 'Gül Sena Altıntaş',
            kuId: 'galtintas17'
          }, {
            name: 'Hasan Can Aslan',
            kuId: 'haslan16'
          }]
        }];
        this.alumni = [{
          term: 'Spring',
          year: 2019,
          alumni: [{
            name: 'Aylin Akseki',
            kuId: 'aakseki15'
          }, {
            name: 'Nurhan Hesna Aksoy',
            kuId: 'naksoy14'
          }, {
            name: 'Mehmet Onur Yaşa',
            kuId: 'myasa18'
          }, {
            name: 'Meryem Şeyda Zayim',
            kuId: 'mzayim17'
          }, {
            name: 'Mısra Taşçı',
            kuId: 'mtasci18'
          }, {
            name: 'Oğulcan Sarıoğlu',
            kuId: 'osarioglu14'
          }, {
            name: 'Petrus Johannes Gerrits',
            kuId: 'pgerrits15'
          }, {
            name: 'Samet Ağca',
            kuId: 'sagca14'
          }, {
            name: 'Sümeyye Koşkulu',
            kuId: 'skoskulu17'
          }]
        }, {
          term: 'Fall',
          year: 2019,
          alumni: [{
            name: 'Abdullah Kahraman',
            kuId: 'abdullahkahraman15'
          }, {
            name: 'Ahmet Musa Semerci',
            kuId: 'asemerci18'
          }, {
            name: 'Ahmet Uyar',
            kuId: 'auyar19'
          }, {
            name: 'Alp Bozdağ',
            kuId: 'abozdag15'
          }, {
            name: 'Ayşe Turşucular',
            kuId: 'atursucular18'
          }, {
            name: 'Beyza Nur Bayrak',
            kuId: 'bbayrak16'
          }, {
            name: 'Binnaz Cemre Oğuz',
            kuId: 'boguz16'
          }, {
            name: 'Canan Tezgeç',
            kuId: 'ctezgec16'
          }, {
            name: 'Deniz Lefkeli',
            kuId: 'dlefkeli17'
          }, {
            name: 'Duygu Sili',
            kuId: 'dsili15'
          }, {
            name: 'Ebru Topçu',
            kuId: 'etopcu18'
          }, {
            name: 'Ece Pınar Özer',
            kuId: 'eozer19'
          }, {
            name: 'Egehan Haydaroğlu',
            kuId: 'ehaydaroglu18'
          }, {
            name: 'Ekin Ulusoy',
            kuId: 'eulusoy18'
          }, {
            name: 'Fatmanur Tiryaki',
            kuId: 'ftiryaki18'
          }, {
            name: 'Furkan Kartal',
            kuId: 'fkartal16'
          }, {
            name: 'Gamze Gümüş',
            kuId: 'gamzegumus19'
          }, {
            name: 'Gonca Güven',
            kuId: 'gguven16'
          }, {
            name: 'Gökçe Sevimli',
            kuId: 'gsevimli17'
          }, {
            name: 'Mahsa Barzgar Vishlaghi',
            kuId: 'mvishlaghi15'
          }, {
            name: 'Marco Liesen',
            kuId: 'mliesen19'
          }, {
            name: 'Melike Kaplan',
            kuId: 'mkaplan19'
          }, {
            name: 'Mert Akkan',
            kuId: 'makkan19'
          }, {
            name: 'Mustafa Yıldız',
            kuId: 'myildiz19'
          }, {
            name: 'Narinsu Bayram',
            kuId: 'nbayram16'
          }, {
            name: 'Sündüz Divle',
            kuId: 'sdivle18'
          }, {
            name: 'Tutku Kılıçaslan',
            kuId: 'tkilicarslan15'
          }, {
            name: 'Yaren Durmuş',
            kuId: 'ydurmus16'
          }, {
            name: 'Zeynep Özörnek',
            kuId: 'zozornek18'
          }, {
            name: 'İlayda Arslan',
            kuId: 'iarslan15'
          }, {
            name: 'İrem Uğurad',
            kuId: 'iugurad18'
          }, {
            name: 'İris Eskinazi',
            kuId: 'ieskinazi15'
          }]
        }];
      }

      _createClass(AlumniComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlumniComponent;
    }();

    AlumniComponent.ɵfac = function AlumniComponent_Factory(t) {
      return new (t || AlumniComponent)();
    };

    AlumniComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlumniComponent,
      selectors: [["app-alumni"]],
      decls: 14,
      vars: 2,
      consts: [[1, "description"], ["href", "//kolt.ku.edu.tr"], [4, "ngFor", "ngForOf"], [1, "alumniContainer"], [1, "kuId"]],
      template: function AlumniComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " KOLT Python program is founded by Ahmet Uysal in collaboration with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ko\xE7 University Office of Learning and Teaching");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " in September 2018 to address students' raising demand for programming. The program is designed for students with no programming experience and assumes no technical background. We prioritize practical use cases of programming over more theoretical aspects and encourage students to leverage their programming skills in their field or interests. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " In Spring 2019, we accepted our first 20 students from various academic principles. The program is ever-growing and improving since then thanks to our passionate team members and feedback from our students. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Team Members");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AlumniComponent_div_10_Template, 5, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Alumni");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AlumniComponent_div_13_Template, 5, 3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teamMembers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alumni);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".teamMembersContainer[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n.teamMembersContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.teamMembersContainer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.kuId[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  vertical-align: middle;\n  color: #444444;\n}\n.alumniContainer[_ngcontent-%COMP%] {\n  column-count: 1;\n  -webkit-column-count: 1;\n  -moz-column-count: 1;\n  column-rule: 1px solid #444444;\n  -webkit-column-rule: 1px solid #444444;\n  -moz-column-rule: 1px solid #444444;\n}\n.alumniContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n}\n@media (min-width: 544px) {\n  .alumniContainer[_ngcontent-%COMP%] {\n    column-count: 2;\n    -webkit-column-count: 2;\n    -moz-column-count: 2;\n  }\n}\n@media (min-width: 768px) {\n  .alumniContainer[_ngcontent-%COMP%] {\n    column-count: 3;\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n  }\n}\n@media (min-width: 1012px) {\n  .alumniContainer[_ngcontent-%COMP%] {\n    column-count: 4;\n    -webkit-column-count: 4;\n    -moz-column-count: 4;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWx1bW5pL0Q6XFxHaXRSZXBvc1xca29sdHB5dGhvbi5naXRodWIuaW8vc3JjXFxhcHBcXGFsdW1uaVxcYWx1bW5pLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbHVtbmkvYWx1bW5pLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO1VBQUEsNkJBQUE7QUNDRjtBREFFO0VBQ0UsU0FBQTtBQ0VKO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FERUE7RUFDRSxnQkFBQTtBQ0NGO0FERUE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNFSjtBREVBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxvQkFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLHVCQUFBO0lBQ0Esb0JBQUE7RUNBRjtBQUNGO0FER0E7RUFDRTtJQUNFLGVBQUE7SUFDQSx1QkFBQTtJQUNBLG9CQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FsdW1uaS9hbHVtbmkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVhbU1lbWJlcnNDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4ua3VJZCB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAjNDQ0NDQ0O1xyXG59XHJcblxyXG4uYWx1bW5pQ29udGFpbmVyIHtcclxuICBjb2x1bW4tY291bnQ6IDE7XHJcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDE7XHJcbiAgLW1vei1jb2x1bW4tY291bnQ6IDE7XHJcbiAgY29sdW1uLXJ1bGU6IDFweCBzb2xpZCAjNDQ0NDQ0O1xyXG4gIC13ZWJraXQtY29sdW1uLXJ1bGU6IDFweCBzb2xpZCAjNDQ0NDQ0O1xyXG4gIC1tb3otY29sdW1uLXJ1bGU6IDFweCBzb2xpZCAjNDQ0NDQ0O1xyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU0NHB4KSB7XHJcbiAgLmFsdW1uaUNvbnRhaW5lciB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMjtcclxuICAgIC1tb3otY29sdW1uLWNvdW50OiAyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmFsdW1uaUNvbnRhaW5lciB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMztcclxuICAgIC1tb3otY29sdW1uLWNvdW50OiAzO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMTJweCkge1xyXG4gIC5hbHVtbmlDb250YWluZXIge1xyXG4gICAgY29sdW1uLWNvdW50OiA0O1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDQ7XHJcbiAgICAtbW96LWNvbHVtbi1jb3VudDogNDtcclxuICB9XHJcbn1cclxuIiwiLnRlYW1NZW1iZXJzQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi50ZWFtTWVtYmVyc0NvbnRhaW5lciBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnRlYW1NZW1iZXJzQ29udGFpbmVyIDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5rdUlkIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICM0NDQ0NDQ7XG59XG5cbi5hbHVtbmlDb250YWluZXIge1xuICBjb2x1bW4tY291bnQ6IDE7XG4gIC13ZWJraXQtY29sdW1uLWNvdW50OiAxO1xuICAtbW96LWNvbHVtbi1jb3VudDogMTtcbiAgY29sdW1uLXJ1bGU6IDFweCBzb2xpZCAjNDQ0NDQ0O1xuICAtd2Via2l0LWNvbHVtbi1ydWxlOiAxcHggc29saWQgIzQ0NDQ0NDtcbiAgLW1vei1jb2x1bW4tcnVsZTogMXB4IHNvbGlkICM0NDQ0NDQ7XG59XG4uYWx1bW5pQ29udGFpbmVyIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU0NHB4KSB7XG4gIC5hbHVtbmlDb250YWluZXIge1xuICAgIGNvbHVtbi1jb3VudDogMjtcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMjtcbiAgICAtbW96LWNvbHVtbi1jb3VudDogMjtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5hbHVtbmlDb250YWluZXIge1xuICAgIGNvbHVtbi1jb3VudDogMztcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMztcbiAgICAtbW96LWNvbHVtbi1jb3VudDogMztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMTJweCkge1xuICAuYWx1bW5pQ29udGFpbmVyIHtcbiAgICBjb2x1bW4tY291bnQ6IDQ7XG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDQ7XG4gICAgLW1vei1jb2x1bW4tY291bnQ6IDQ7XG4gIH1cbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlumniComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alumni',
          templateUrl: './alumni.component.html',
          styleUrls: ['./alumni.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/alumni/alumni.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/alumni/alumni.module.ts ***!
    \*****************************************/

  /*! exports provided: AlumniModule */

  /***/
  function srcAppAlumniAlumniModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlumniModule", function () {
      return AlumniModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _alumni_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./alumni.component */
    "./src/app/alumni/alumni.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AlumniModule = function AlumniModule() {
      _classCallCheck(this, AlumniModule);
    };

    AlumniModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AlumniModule
    });
    AlumniModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AlumniModule_Factory(t) {
        return new (t || AlumniModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _alumni_component__WEBPACK_IMPORTED_MODULE_2__["AlumniComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlumniModule, {
        declarations: [_alumni_component__WEBPACK_IMPORTED_MODULE_2__["AlumniComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlumniModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_alumni_component__WEBPACK_IMPORTED_MODULE_2__["AlumniComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
            path: '',
            component: _alumni_component__WEBPACK_IMPORTED_MODULE_2__["AlumniComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=alumni-alumni-module-es5.js.map