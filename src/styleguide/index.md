# Introduction

Use this as a reference point when building any digital aspect of Memgraph project. For in depth information on how to properly use elements, refer to Foundation documentation linked above.

To customize the use of Foundation components, copy the `_foundation.scss` and `_settings.scss`. You can also customize Foundation JavaScript by only including the plugins you need from the Foundation `dist/js` folder to your build.




# Colors

The Memgraph primary pallette represents the brand. It is vivid, clean and bold. Use primary colors sparsly, when emphasizing elements. These colors are best used in form of gradients for content areas, backgrounds etc. Main accent color for text is orange.

Auxillary pallette supports primary colors to ensure clear communication and contrast. These colors should be used only as an addition to tone down primary pallette usage, never as standalone colors.

<div class="grid-x">
<div class="medium-6">
<h3>Primary colors</h3>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#FB6E00"></div>
    </div>
    <div class="media-object-section">
      $brand-primary <br/>
       #FB6E00
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#720096"></div>
    </div>
    <div class="media-object-section">
      $brand-secondary <br/>
       #720096
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#FF0092"></div>
    </div>
    <div class="media-object-section">
      $brand-pink <br/>
       #FF0092
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#FF0000"></div>
    </div>
    <div class="media-object-section">
      $brand-red <br/>
       #FF0000
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#00CCBB"></div>
    </div>
    <div class="media-object-section">
      $brand-success <br/>
       #00CCBB
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#FFC500"></div>
    </div>
    <div class="media-object-section">
      $brand-warning <br/>
       #FFC500
    </div>
</div>
</div>
<div class="medium-6">

<h3> Gray palette </h3>

<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#fff"></div>
    </div>
    <div class="media-object-section">
      $brand-white <br/>
       #FFFFFF
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#231f20"></div>
    </div>
    <div class="media-object-section">
      $brand-black <br/>
       #231f20
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#857f87"></div>
    </div>
    <div class="media-object-section">
      $brand-gray <br/>
       #857f87
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#e6e6e6"></div>
    </div>
    <div class="media-object-section">
      $brand-silver <br/>
       #e6e6e6
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#f9f9f9"></div>
    </div>
    <div class="media-object-section">
      $brand-light <br/>
       #f9f9f9
    </div>
</div>
</div>
</div>

### Brand gradients

<div class="grid-x">
    <div class="medium-6">
        <div class="media-object">
            <div class="media-object-section">
                <div class="color gradient-primary"></div>
            </div>
            <div class="media-object-section">
                $gradient-primary
            </div>
        </div>
        <div class="media-object">
            <div class="media-object-section">
                <div class="color gradient-dark"></div>
            </div>
            <div class="media-object-section">
                $gradient-dark
            </div>
        </div>
        <div class="media-object">
            <div class="media-object-section">
                <div class="color gradient-punch"></div>
            </div>
            <div class="media-object-section">
                $gradient-punch
            </div>
        </div>
        <div class="media-object">
            <div class="media-object-section">
                <div class="color gradient-light"></div>
            </div>
            <div class="media-object-section">
                $gradient-light
            </div>
        </div>
    </div>
    <div class="medium-6">
        <div class="media-object">
            <div class="media-object-section">
                <div class="color gradient-auxiliary"></div>
            </div>
            <div class="media-object-section">
                $gradient-auxiliary
            </div>
        </div>
    </div>
</div>




# Typography

Our primary typefaces are Encode Sans Semi Condensed and Roboto. These typefaces can be used both in digital and print environment.

Use Encode Sans Pro only for headings, and avoid using italics. Never use it for quotes. Use Roboto for body text and in lighter weights. Use Roboto Mono for code blocks.

### Example

<div class="card card-section">
<h1>Lorem Ipsum Dolores Berum Voluptas</h1>
<p class="lead">Tiberum accae optatenet lametan. Ut accusdam rem atium conseces cusam sinumendis dundis at est esendunt.</p>
<p>Lerum re lab in re et alis pel estrum eaque dus invenimi, optas sed que ium que magnat doluptio quam quid ipsam quodipsum as eosa cusam et harum re nos moui offic teniscita doluptam non perum fuga atium est.</p>
<blockquote>Nam dolor poria nobis es alibea venimil luptatiae diciunt od ullam idis acipsae et.</blockquote>
<p>Estis re endant aut qui optur? Iciasperibus ipsam imenemp osapita aut et maiorest ad quam harciis moles dolorum reperorem si intor aut ut quia conseque dolupti accum autem excepel iquiam ad ullam aliquos velest atium fuga quia tiores.</p>
</div>



# Forms

<form>
    <div class="grid-x grid-padding-x">

        <div class="medium-6 cell">
            <label>Input Label
                <input type="text" placeholder=".medium-6.cell">
            </label>
        </div>
        <div class="medium-6 cell">
            <label>Input Label
                <input type="text" placeholder=".medium-6.cell">
            </label>
        </div>

        <label class="large-12 cell">Select Menu
            <select>
                <option value="husker">Husker</option>
                <option value="starbuck">Starbuck</option>
                <option value="hotdog">Hot Dog</option>
                <option value="apollo">Apollo</option>
            </select>
        </label>

        <fieldset class="large-6 cell">
            <legend>Choose Your Favorite</legend>
            <input type="radio" name="pokemon" value="Red" id="pokemonRed" required><label for="pokemonRed">Red</label>
            <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label for="pokemonBlue">Blue</label>
            <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"><label for="pokemonYellow">Yellow</label>
        </fieldset>

        <fieldset class="large-6 cell">
            <legend>Check these out</legend>
            <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
            <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
            <input id="checkbox3" type="checkbox"><label for="checkbox3">Checkbox 3</label>
        </fieldset>

        <div class="large-12 input-group cell">
            <span class="input-group-label">$</span>
            <input class="input-group-field" type="number">
            <div class="input-group-button">
                <input type="submit" class="button" value="Submit">
            </div>
        </div>
    </div>
</form>



# Buttons

For primary button purposes, main color is black. Inside the app, stick to the primary color palette. You cna apply button classes to both link and button elements.

#### Sizing:

<a class="button tiny" href="#">So Tiny</a>
<a class="button small" href="#">So Small</a>
<a class="button" href="#">So Basic</a>
<a class="button large" href="#">So Large</a>
<a class="button expanded" href="#">Such Expand</a>

#### Coloring:

<a class="button primary" href="#">Primary</a>
<a class="button secondary" href="#">Secondary</a>
<a class="button success" href="#">Success</a>
<a class="button alert" href="#">Alert</a>
<a class="button warning" href="#">Warning</a>


# Alerts


<div class="callout">
  <h5>This is a callout.</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</div>

<div class="callout primary">
  <h5>This is a secondary callout</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</div>

<div class="callout secondary">
  <h5>This is a secondary callout</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</div>



# Labels

<span class="label primary">Primary Label</span>
<span class="label secondary">Secondary Label</span>
<span class="label success">Success Label</span>
<span class="label alert">Alert Label</span>
<span class="label warning">Warning Label</span>




# Badges

<span class="badge primary">1</span>
<span class="badge secondary">2</span>
<span class="badge success">3</span>
<span class="badge alert">A</span>
<span class="badge warning">B</span>



# Dropdown

<button class="button" type="button" data-toggle="example-dropdown-bottom-left">Toggle Dropdown</button>
<div class="dropdown-pane" data-position="bottom" data-alignment="left" id="example-dropdown-bottom-left" data-dropdown data-auto-focus="true">
  Content here
</div>



# Tooltip

<div class="card card-section">
    <p>
        The <span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover="false" tabindex="1" title="Fancy word for a beetle.">scarabaeus</span> hung quite clear of any branches, and, if allowed to fall, would have fallen at our feet.
    </p>
</div>



# Table

<table>
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>



# Charts
...



# Icons

We use Fontello to define custom UI icons.


<div id="icons" class="container">
    <div class="grid-x">
        <div class="small-4">
            <div>
                <span class="icon-heart"></span>
                <span class="i-name">icon-heart</span>
            </div>
            <div>
                <span class="icon-help-circled"></span>
                <span class="i-name">icon-help-circled</span>
            </div>
            <div>
                <span class="icon-right"></span>
                <span class="i-name">icon-right</span>
            </div>
            <div>
                <span class="icon-star"></span>
                <span class="i-name">icon-star</span>
            </div>
            <div>
                <span class="icon-ok"></span>
                <span class="i-name">icon-ok</span>
            </div>
            <div>
                <span class="icon-cancel"></span>
                <span class="i-name">icon-cancel</span>
            </div>
            <div>
                <span class="icon-plus"></span>
                <span class="i-name">icon-plus</span>
            </div>
            <div>
                <span class="icon-pencil"></span>
                <span class="i-name">icon-pencil</span>
            </div>
        </div>
        <div class="small-4">
            <div>
                <span class="icon-attention"></span>
                <span class="i-name">icon-attention</span>
            </div>
            <div>
                <span class="icon-cloud"></span>
                <span class="i-name">icon-cloud</span>
            </div>
            <div>
                <span class="icon-cog"></span>
                <span class="i-name">icon-cog</span>
            </div>
            <div>
                <span class="icon-book"></span>
                <span class="i-name">icon-book</span>
            </div>
            <div>
                <span class="icon-care"></span>
                <span class="i-name">icon-care</span>
            </div>
            <div>
                <span class="icon-code"></span>
                <span class="i-name">icon-code</span>
            </div>
            <div>
                <span class="icon-coffee"></span>
                <span class="i-name">icon-coffee</span>
            </div>
            <div>
                <span class="icon-food"></span>
                <span class="i-name">icon-food</span>
            </div>
        </div>
        <div class="small-4">
            <div>
                <span class="icon-idea"></span>
                <span class="i-name">icon-idea</span>
            </div>
            <div>
                <span class="icon-medal"></span>
                <span class="i-name">icon-medal</span>
            </div>
            <div>
                <span class="icon-monitor"></span>
                <span class="i-name">icon-monitor</span>
            </div>
            <div>
                <span class="icon-presentation"></span>
                <span class="i-name">icon-presentation</span>
            </div>
            <div>
                <span class="icon-time"></span>
                <span class="i-name">icon-time</span>
            </div>
            <div>
                <span class="icon-vacation"></span>
                <span class="i-name">icon-vacation</span>
            </div>
            <div>
                <span class="icon-trophy"></span>
                <span class="i-name">icon-trophy</span>
            </div>
            <div>
                <span class="icon-access"></span>
                <span class="i-name">icon-access</span>
            </div>
        </div>
        <div class="small-4">
            <div>
                <span class="icon-connection"></span>
                <span class="i-name">icon-connection</span>
            </div>
            <div>
                <span class="icon-target"></span>
                <span class="i-name">icon-target</span>
            </div>
            <div>
                <span class="icon-disk"></span>
                <span class="i-name">icon-disk</span>
            </div>
            <div>
                <span class="icon-interface"></span>
                <span class="i-name">icon-interface</span>
            </div>
            <div>
                <span class="icon-spread"></span>
                <span class="i-name">icon-spread</span>
            </div>
            <div>
                <span class="icon-down-open"></span>
                <span class="i-name">icon-down-open</span>
            </div>
            <div>
                <span class="icon-up-open"></span>
                <span class="i-name">icon-up-open</span>
            </div>
            <div>
                <span class="icon-right-open"></span>
                <span class="i-name">icon-right-open</span>
            </div>
        </div>
        <div class="small-4">
            <div>
                <span class="icon-left-open"></span>
                <span class="i-name">icon-left-open</span>
            </div>
            <div>
                <span class="icon-play"></span>
                <span class="i-name">icon-play</span>
            </div>
            <div>
                <span class="icon-globe-inv"></span>
                <span class="i-name">icon-globe-inv</span>
            </div>
            <div>
                <span class="icon-paper-plane"></span>
                <span class="i-name">icon-paper-plane</span>
            </div>
            <div>
                <span class="icon-location"></span>
                <span class="i-name">icon-location</span>
            </div>
            <div>
                <span class="icon-facebook"></span>
                <span class="i-name">icon-facebook</span>
            </div>
            <div>
                <span class="icon-github-circled-alt2"></span>
                <span class="i-name">icon-github-circled-alt2</span>
            </div>
            <div>
                <span class="icon-twitter"></span>
                <span class="i-name">icon-twitter</span>
            </div>
        </div>
        <div class="small-4">
            <div>
                <span class="icon-linkedin"></span>
                <span class="i-name">icon-linkedin</span>
            </div>
            <div>
                <span class="icon-user"></span>
                <span class="i-name">icon-user</span>
            </div>
            <div>
                <span class="icon-ok-circled"></span>
                <span class="i-name">icon-ok-circled</span>
            </div>
            <div>
                <span class="icon-cancel-circled"></span>
                <span class="i-name">icon-cancel-circled</span>
            </div>
            <div>
                <span class="icon-info-circled"></span>
                <span class="i-name">icon-info-circled</span>
            </div>
            <div>
                <span class="icon-comment"></span>
                <span class="i-name">icon-comment</span>
            </div>
            <div>
                <span class="icon-search"></span>
                <span class="i-name">icon-search</span>
            </div>
        </div>
    </div>
</div>

