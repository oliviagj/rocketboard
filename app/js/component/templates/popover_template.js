/*
 * Copyright 2014 Thoughtworks Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([], function (template, compiler) {
  return popoverTemplate;

  function popoverTemplate() {
    this.popover = function (popover) {
      return this.template.render(popover);
    }

    this.before('initialize', function () {
      this.template = Hogan.compile(
        '<div class="popover">' +
        '<div class="popover-header">' +
        '<h2>{{title}}</h2>' +
        '</div>' +
        '<div class="popover-body">{{body}}</div>' +
        '</div>'
      );
    });
  }
});