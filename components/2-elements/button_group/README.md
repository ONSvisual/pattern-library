## The HTML

```
<div class="btn btn--select " aria-labelledby="Male">
      <input type="radio" name="gender" value="Male" autocomplete="off" tabindex="0"> Male
    </div>
    <div class="btn btn--select " tabindex="0" aria-labelledby="Female">
      <input type="radio" name="gender" value="Female" autocomplete="off" tabindex="0" checked> Female
    </div>
```

The `name` needs to be the same for the group.

The `value` is what you can return when you search for which button is checked by javascript. Use
```
gender = document.querySelector('input[name="gender"]:checked').value;
```

## The CSS
```
.btn-group {
  padding: 10px;
  overflow: auto;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group .btn {
  float: left;
  margin: 0;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  border-right: 1px solid #D0D2D3;
}

.btn-group-vertical>.btn,
.btn-group>.btn {
  position: relative;
  float: left;
}

.btn {
  position: relative;
  padding: 10px 15px;
  margin: 0 0 20px;
  line-height: normal;
  color: #fff;
  font-size: 1.3em !important;
  border-radius: 0px;
  display: inline-block;
  text-rendering: optimizeLegibility;
  transition: background-color .2s ease-in, color .2s ease-in;
}

.btn--select {
  margin-left: 0px !important;
}

.btn--select {
  color: #206095 !important;
  border: 2px solid #206095 !important;
  margin-right: 15px !important;
  margin-bottom: 15px !important;
  transition: all ease .2s;
  border-radius: 30px !important;
}

.btn {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  display: inline-block;
  width: auto;
  cursor: pointer;
  padding: 6px 16px 10px 16px;
  border: 0 none;
  text-align: center;
  -webkit-appearance: none;
  transition: background-color 0.25s ease-out;
  text-decoration: none;
  line-height: 24px;
}

.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}

data-toggle="buttons"]>.btn input[type="checkbox"],
[data-toggle="buttons"]>.btn input[type="radio"],
[data-toggle="buttons"]>.btn-group>.btn input[type="checkbox"],
[data-toggle="buttons"]>.btn-group>.btn input[type="radio"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

input[type="checkbox"],
input[type="radio"] {
  -webkit-appearance: none;
}

.btn-group input {
  height: 0px;
  width: 0px;
  position: absolute;
  left: -100px;
}

input[type="checkbox"],
input[type="radio"] {
  margin: 4px 0 0;
  margin-top: 1px\9;
  line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
}

input {
  border: none;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: medium;
  border-radius: 0;
  border-bottom: solid 1px #ddd;
  font-size: 18px;
  line-height: 32px;
  margin: 16px 0;
  padding: 6px 0 0 0;
}

input,
select {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

input {
  line-height: normal;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  color: inherit;
}

.btn-group-vertical > .btn.active, .btn-group-vertical > .btn:active, .btn-group-vertical > .btn:focus, .btn-group-vertical > .btn:hover, .btn-group > .btn.active, .btn-group > .btn:active, .btn-group > .btn:focus, .btn-group > .btn:hover {
z-index: 2;
}

.btn:active, .btn.active {
background-color: #206095;
color: white !important;
-webkit-box-shadow: none;
box-shadow: 0 0 0pt 3pt orange;
}

.btn--select:hover {
background-color: #206095;
color: white !important;
}
.btn:focus {
outline: none;
box-shadow: 0px 0px 0 3px #FFA23A;
color: white;
outline-offset: 0px;
}
```

## The javascript
Javascript is used to toggle buttons active on click.

Here's what you need to include. It needs d3.js.

```
d3.selectAll('.btn').on('click',function(d){
  d3.selectAll('.btn').classed('active',false)
  d3.select(this).classed('active',true)
  d3.selectAll('.btn').selectAll('input').property('checked',false)
  d3.select(this).select('input').property('checked',true)
})
```

## Usage
See something similar in action in [Children whose families struggle to get on a more likely to have mental disorders](https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/childhealth/articles/childrenwhosefamiliesstruggletogetonaremorelikelytohavementaldisorders/2019-03-26).
