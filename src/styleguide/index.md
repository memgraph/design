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
        <div class="color" style="background-color:#DD2222"></div>
    </div>
    <div class="media-object-section">
      $brand-red <br/>
       #DD2222
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#FB6E00"></div>
    </div>
    <div class="media-object-section">
      $brand-orange <br/>
       #FB6E00
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#FFC500"></div>
    </div>
    <div class="media-object-section">
      $brand-yellow <br/>
       #FFC500
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#720096"></div>
    </div>
    <div class="media-object-section">
      $brand-purple <br/>
       #720096
    </div>
</div>

<h3>Secondary colors</h3>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#1EB76D"></div>
    </div>
    <div class="media-object-section">
      $brand-green <br/>
       #1EB76D
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#0677B2"></div>
    </div>
    <div class="media-object-section">
      $brand-blue <br/>
       #0677B2
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
        <div class="color" style="background-color:#f9f9f9"></div>
    </div>
    <div class="media-object-section">
      $brand-light <br/>
       #f9f9f9
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
        <div class="color" style="background-color:#bab8bb"></div>
    </div>
    <div class="media-object-section">
      $brand-ash <br/>
       #bab8bb
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#9d989f"></div>
    </div>
    <div class="media-object-section">
      $brand-cadet <br/>
       #9d989f
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
        <div class="color" style="background-color:#645965"></div>
    </div>
    <div class="media-object-section">
      $brand-dimgray <br/>
       #645965
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#3E323F"></div>
    </div>
    <div class="media-object-section">
      $brand-anthracite <br/>
       #3E323F
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
<br />
<br />
<a class="button expanded" href="#">Such Expand</a>

#### Coloring:

<a class="button primary" href="#">Primary</a>
<a class="button secondary" href="#">Secondary</a>
<a class="button success" href="#">Success</a>
<a class="button alert" href="#">Alert</a>
<a class="button warning" href="#">Warning</a>



# Callouts - Alerts

<div class="callout primary">
  <h5>This is a primary callout</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</div>

<div class="callout secondary">
  <h5>This is a secondary callout</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</div>

<div class="callout success">
  <h5>This is a success callout</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</div>

<div class="callout alert">
  <h5>This is a alert callout</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</div>

<div class="callout warning">
  <h5>This is a warning callout</h5>
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

Use tooltip to show small amounts of contextual data. Best to use in graphs or tables to provide additional information.
Always place it on top if possible.

<blockquote>
    The <span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover="false" tabindex="1" title="Fancy word for a beetle.">scarabaeus</span> hung quite clear of any branches, and, if allowed to fall, would have fallen at our feet.
</blockquote>




# Table

Use table to display big, more complex sets of data. If the table is a standalone element in the UI against the body background, wrap it into `card` class element.

Table next to other content:

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

Table as a standalone element:
<div class="card">
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
</div>



# Progressbar
<div class="progress" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
  <div class="progress-meter" style="width: 50%"></div>
</div>

<div class="progress success" role="progressbar" tabindex="0" aria-valuenow="80" aria-valuemin="0" aria-valuetext="80 percent" aria-valuemax="100">
  <div class="progress-meter" style="width: 80%"></div>
</div>

<div class="progress warning" role="progressbar" tabindex="0" aria-valuenow="30" aria-valuemin="0" aria-valuetext="30 percent" aria-valuemax="100">
  <div class="progress-meter" style="width: 30%"></div>
</div>

<div class="progress alert" role="progressbar" tabindex="0" aria-valuenow="10" aria-valuemin="0" aria-valuetext="10 percent" aria-valuemax="100">
  <div class="progress-meter" style="width: 10%"></div>
</div>

# Slider

Use slider in forms when user needs to choose a number within a specified range. Use number input next to slider whenever possible to ensure easier use.

<div class="container">
    <div class="grid-x">
        <div class="small-10 columns">
          <div class="slider" data-slider data-initial-start="50" data-start="50" data-end="200">
            <span class="slider-handle" data-slider-handle role="slider" tabindex="1" aria-controls="sliderOutput1"></span>
            <span class="slider-fill" data-slider-fill></span>
          </div>
        </div>
        <div class="small-2 columns">
          <input type="number" id="sliderOutput1">
        </div>
    </div>
</div>





# Icons

We use Fontello to define custom UI icons.


 <div class="container" id="icons">
      <div class="row">
        <div class="the-icons" title="Code: 0xe800"><i class="demo-icon icon-account-check"></i> <span class="i-name">icon-account-check</span></div>
        <div class="the-icons" title="Code: 0xe801"><i class="demo-icon icon-account-theft"></i> <span class="i-name">icon-account-theft</span></div>
        <div class="the-icons" title="Code: 0xe802"><i class="demo-icon icon-analytics"></i> <span class="i-name">icon-analytics</span></div>
        <div class="the-icons" title="Code: 0xe803"><i class="demo-icon icon-blog"></i> <span class="i-name">icon-blog</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe804"><i class="demo-icon icon-book"></i> <span class="i-name">icon-book</span></div>
        <div class="the-icons" title="Code: 0xe805"><i class="demo-icon icon-briefcase"></i> <span class="i-name">icon-briefcase</span></div>
        <div class="the-icons" title="Code: 0xe806"><i class="demo-icon icon-building-blocks"></i> <span class="i-name">icon-building-blocks</span></div>
        <div class="the-icons" title="Code: 0xe807"><i class="demo-icon icon-card-fraud"></i> <span class="i-name">icon-card-fraud</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe808"><i class="demo-icon icon-care"></i> <span class="i-name">icon-care</span></div>
        <div class="the-icons" title="Code: 0xe809"><i class="demo-icon icon-chart-bar"></i> <span class="i-name">icon-chart-bar</span></div>
        <div class="the-icons" title="Code: 0xe80a"><i class="demo-icon icon-chart-pie"></i> <span class="i-name">icon-chart-pie</span></div>
        <div class="the-icons" title="Code: 0xe80b"><i class="demo-icon icon-checklist"></i> <span class="i-name">icon-checklist</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe80c"><i class="demo-icon icon-checkmark"></i> <span class="i-name">icon-checkmark</span></div>
        <div class="the-icons" title="Code: 0xe80d"><i class="demo-icon icon-chip-big"></i> <span class="i-name">icon-chip-big</span></div>
        <div class="the-icons" title="Code: 0xe80e"><i class="demo-icon icon-chip-small"></i> <span class="i-name">icon-chip-small</span></div>
        <div class="the-icons" title="Code: 0xe80f"><i class="demo-icon icon-cloud-alt"></i> <span class="i-name">icon-cloud-alt</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe810"><i class="demo-icon icon-cloud"></i> <span class="i-name">icon-cloud</span></div>
        <div class="the-icons" title="Code: 0xe811"><i class="demo-icon icon-code"></i> <span class="i-name">icon-code</span></div>
        <div class="the-icons" title="Code: 0xe812"><i class="demo-icon icon-cloud-empty"></i> <span class="i-name">icon-cloud-empty</span></div>
        <div class="the-icons" title="Code: 0xe813"><i class="demo-icon icon-coffee"></i> <span class="i-name">icon-coffee</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe814"><i class="demo-icon icon-cog-spin"></i> <span class="i-name">icon-cog-spin</span></div>
        <div class="the-icons" title="Code: 0xe815"><i class="demo-icon icon-cog"></i> <span class="i-name">icon-cog</span></div>
        <div class="the-icons" title="Code: 0xe816"><i class="demo-icon icon-cogs"></i> <span class="i-name">icon-cogs</span></div>
        <div class="the-icons" title="Code: 0xe817"><i class="demo-icon icon-compass"></i> <span class="i-name">icon-compass</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe818"><i class="demo-icon icon-complexity"></i> <span class="i-name">icon-complexity</span></div>
        <div class="the-icons" title="Code: 0xe819"><i class="demo-icon icon-conconnector"></i> <span class="i-name">icon-conconnector</span></div>
        <div class="the-icons" title="Code: 0xe81a"><i class="demo-icon icon-connection"></i> <span class="i-name">icon-connection</span></div>
        <div class="the-icons" title="Code: 0xe81b"><i class="demo-icon icon-credit-card"></i> <span class="i-name">icon-credit-card</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe81c"><i class="demo-icon icon-crypto-laundering-alt"></i> <span class="i-name">icon-crypto-laundering-alt</span></div>
        <div class="the-icons" title="Code: 0xe81d"><i class="demo-icon icon-crypto-laundering"></i> <span class="i-name">icon-crypto-laundering</span></div>
        <div class="the-icons" title="Code: 0xe81e"><i class="demo-icon icon-dashboard-slow"></i> <span class="i-name">icon-dashboard-slow</span></div>
        <div class="the-icons" title="Code: 0xe81f"><i class="demo-icon icon-data-volumes"></i> <span class="i-name">icon-data-volumes</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe820"><i class="demo-icon icon-database-cloud"></i> <span class="i-name">icon-database-cloud</span></div>
        <div class="the-icons" title="Code: 0xe821"><i class="demo-icon icon-database-ok"></i> <span class="i-name">icon-database-ok</span></div>
        <div class="the-icons" title="Code: 0xe822"><i class="demo-icon icon-database"></i> <span class="i-name">icon-database</span></div>
        <div class="the-icons" title="Code: 0xe823"><i class="demo-icon icon-diamond"></i> <span class="i-name">icon-diamond</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe824"><i class="demo-icon icon-disk-alt"></i> <span class="i-name">icon-disk-alt</span></div>
        <div class="the-icons" title="Code: 0xe825"><i class="demo-icon icon-disk"></i> <span class="i-name">icon-disk</span></div>
        <div class="the-icons" title="Code: 0xe826"><i class="demo-icon icon-email"></i> <span class="i-name">icon-email</span></div>
        <div class="the-icons" title="Code: 0xe827"><i class="demo-icon icon-encrypted"></i> <span class="i-name">icon-encrypted</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe828"><i class="demo-icon icon-filter"></i> <span class="i-name">icon-filter</span></div>
        <div class="the-icons" title="Code: 0xe829"><i class="demo-icon icon-flag"></i> <span class="i-name">icon-flag</span></div>
        <div class="the-icons" title="Code: 0xe82a"><i class="demo-icon icon-flash"></i> <span class="i-name">icon-flash</span></div>
        <div class="the-icons" title="Code: 0xe82b"><i class="demo-icon icon-folder"></i> <span class="i-name">icon-folder</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe82c"><i class="demo-icon icon-food-alt"></i> <span class="i-name">icon-food-alt</span></div>
        <div class="the-icons" title="Code: 0xe82d"><i class="demo-icon icon-food"></i> <span class="i-name">icon-food</span></div>
        <div class="the-icons" title="Code: 0xe82e"><i class="demo-icon icon-globe-net-alt"></i> <span class="i-name">icon-globe-net-alt</span></div>
        <div class="the-icons" title="Code: 0xe82f"><i class="demo-icon icon-globe-net"></i> <span class="i-name">icon-globe-net</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe830"><i class="demo-icon icon-group"></i> <span class="i-name">icon-group</span></div>
        <div class="the-icons" title="Code: 0xe831"><i class="demo-icon icon-history"></i> <span class="i-name">icon-history</span></div>
        <div class="the-icons" title="Code: 0xe832"><i class="demo-icon icon-idea-alt"></i> <span class="i-name">icon-idea-alt</span></div>
        <div class="the-icons" title="Code: 0xe833"><i class="demo-icon icon-idea"></i> <span class="i-name">icon-idea</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe834"><i class="demo-icon icon-info"></i> <span class="i-name">icon-info</span></div>
        <div class="the-icons" title="Code: 0xe835"><i class="demo-icon icon-interchange"></i> <span class="i-name">icon-interchange</span></div>
        <div class="the-icons" title="Code: 0xe836"><i class="demo-icon icon-interface"></i> <span class="i-name">icon-interface</span></div>
        <div class="the-icons" title="Code: 0xe837"><i class="demo-icon icon-key"></i> <span class="i-name">icon-key</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe838"><i class="demo-icon icon-lock"></i> <span class="i-name">icon-lock</span></div>
        <div class="the-icons" title="Code: 0xe839"><i class="demo-icon icon-magnet"></i> <span class="i-name">icon-magnet</span></div>
        <div class="the-icons" title="Code: 0xe83a"><i class="demo-icon icon-map-marker"></i> <span class="i-name">icon-map-marker</span></div>
        <div class="the-icons" title="Code: 0xe83b"><i class="demo-icon icon-medal"></i> <span class="i-name">icon-medal</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe83c"><i class="demo-icon icon-money-laundering-copy"></i> <span class="i-name">icon-money-laundering-copy</span></div>
        <div class="the-icons" title="Code: 0xe83d"><i class="demo-icon icon-money-laundering"></i> <span class="i-name">icon-money-laundering</span></div>
        <div class="the-icons" title="Code: 0xe83e"><i class="demo-icon icon-monitor"></i> <span class="i-name">icon-monitor</span></div>
        <div class="the-icons" title="Code: 0xe83f"><i class="demo-icon icon-nodes-alt"></i> <span class="i-name">icon-nodes-alt</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe840"><i class="demo-icon icon-nodes"></i> <span class="i-name">icon-nodes</span></div>
        <div class="the-icons" title="Code: 0xe841"><i class="demo-icon icon-non-scalable"></i> <span class="i-name">icon-non-scalable</span></div>
        <div class="the-icons" title="Code: 0xe842"><i class="demo-icon icon-off"></i> <span class="i-name">icon-off</span></div>
        <div class="the-icons" title="Code: 0xe843"><i class="demo-icon icon-password-stolen"></i> <span class="i-name">icon-password-stolen</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe844"><i class="demo-icon icon-password"></i> <span class="i-name">icon-password</span></div>
        <div class="the-icons" title="Code: 0xe845"><i class="demo-icon icon-plug"></i> <span class="i-name">icon-plug</span></div>
        <div class="the-icons" title="Code: 0xe846"><i class="demo-icon icon-presentation"></i> <span class="i-name">icon-presentation</span></div>
        <div class="the-icons" title="Code: 0xe847"><i class="demo-icon icon-question"></i> <span class="i-name">icon-question</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe848"><i class="demo-icon icon-real-time"></i> <span class="i-name">icon-real-time</span></div>
        <div class="the-icons" title="Code: 0xe849"><i class="demo-icon icon-reshipping"></i> <span class="i-name">icon-reshipping</span></div>
        <div class="the-icons" title="Code: 0xe84a"><i class="demo-icon icon-retail"></i> <span class="i-name">icon-retail</span></div>
        <div class="the-icons" title="Code: 0xe84b"><i class="demo-icon icon-scalable"></i> <span class="i-name">icon-scalable</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe84c"><i class="demo-icon icon-search"></i> <span class="i-name">icon-search</span></div>
        <div class="the-icons" title="Code: 0xe84d"><i class="demo-icon icon-settings"></i> <span class="i-name">icon-settings</span></div>
        <div class="the-icons" title="Code: 0xe84e"><i class="demo-icon icon-shield"></i> <span class="i-name">icon-shield</span></div>
        <div class="the-icons" title="Code: 0xe84f"><i class="demo-icon icon-spread"></i> <span class="i-name">icon-spread</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe850"><i class="demo-icon icon-support"></i> <span class="i-name">icon-support</span></div>
        <div class="the-icons" title="Code: 0xe851"><i class="demo-icon icon-tag-broken"></i> <span class="i-name">icon-tag-broken</span></div>
        <div class="the-icons" title="Code: 0xe852"><i class="demo-icon icon-tag"></i> <span class="i-name">icon-tag</span></div>
        <div class="the-icons" title="Code: 0xe853"><i class="demo-icon icon-target"></i> <span class="i-name">icon-target</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe854"><i class="demo-icon icon-telecommunication"></i> <span class="i-name">icon-telecommunication</span></div>
        <div class="the-icons" title="Code: 0xe855"><i class="demo-icon icon-time"></i> <span class="i-name">icon-time</span></div>
        <div class="the-icons" title="Code: 0xe856"><i class="demo-icon icon-trash"></i> <span class="i-name">icon-trash</span></div>
        <div class="the-icons" title="Code: 0xe857"><i class="demo-icon icon-trophy"></i> <span class="i-name">icon-trophy</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe858"><i class="demo-icon icon-unlock"></i> <span class="i-name">icon-unlock</span></div>
        <div class="the-icons" title="Code: 0xe859"><i class="demo-icon icon-upload"></i> <span class="i-name">icon-upload</span></div>
        <div class="the-icons" title="Code: 0xe85a"><i class="demo-icon icon-user-avatar"></i> <span class="i-name">icon-user-avatar</span></div>
        <div class="the-icons" title="Code: 0xe85b"><i class="demo-icon icon-user"></i> <span class="i-name">icon-user</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe85c"><i class="demo-icon icon-users-linked"></i> <span class="i-name">icon-users-linked</span></div>
        <div class="the-icons" title="Code: 0xe85d"><i class="demo-icon icon-users"></i> <span class="i-name">icon-users</span></div>
        <div class="the-icons" title="Code: 0xe85e"><i class="demo-icon icon-vacation"></i> <span class="i-name">icon-vacation</span></div>
        <div class="the-icons" title="Code: 0xe85f"><i class="demo-icon icon-cancel"></i> <span class="i-name">icon-cancel</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe860"><i class="demo-icon icon-ok"></i> <span class="i-name">icon-ok</span></div>
        <div class="the-icons" title="Code: 0xe861"><i class="demo-icon icon-heart"></i> <span class="i-name">icon-heart</span></div>
        <div class="the-icons" title="Code: 0xe862"><i class="demo-icon icon-star"></i> <span class="i-name">icon-star</span></div>
        <div class="the-icons" title="Code: 0xe863"><i class="demo-icon icon-plus"></i> <span class="i-name">icon-plus</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe864"><i class="demo-icon icon-down"></i> <span class="i-name">icon-down</span></div>
        <div class="the-icons" title="Code: 0xe865"><i class="demo-icon icon-left"></i> <span class="i-name">icon-left</span></div>
        <div class="the-icons" title="Code: 0xe866"><i class="demo-icon icon-right"></i> <span class="i-name">icon-right</span></div>
        <div class="the-icons" title="Code: 0xe867"><i class="demo-icon icon-up"></i> <span class="i-name">icon-up</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe868"><i class="demo-icon icon-pencil"></i> <span class="i-name">icon-pencil</span></div>
        <div class="the-icons" title="Code: 0xe869"><i class="demo-icon icon-attention"></i> <span class="i-name">icon-attention</span></div>
        <div class="the-icons" title="Code: 0xe86a"><i class="demo-icon icon-user-sm"></i> <span class="i-name">icon-user-sm</span></div>
        <div class="the-icons" title="Code: 0xe86b"><i class="demo-icon icon-users-sm"></i> <span class="i-name">icon-users-sm</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe86c"><i class="demo-icon icon-help-circled"></i> <span class="i-name">icon-help-circled</span></div>
        <div class="the-icons" title="Code: 0xe86d"><i class="demo-icon icon-info-circled"></i> <span class="i-name">icon-info-circled</span></div>
        <div class="the-icons" title="Code: 0xe86e"><i class="demo-icon icon-home"></i> <span class="i-name">icon-home</span></div>
        <div class="the-icons" title="Code: 0xe86f"><i class="demo-icon icon-download"></i> <span class="i-name">icon-download</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe870"><i class="demo-icon icon-remove"></i> <span class="i-name">icon-remove</span></div>
        <div class="the-icons" title="Code: 0xe871"><i class="demo-icon icon-archive"></i> <span class="i-name">icon-archive</span></div>
        <div class="the-icons" title="Code: 0xe872"><i class="demo-icon icon-folder-sm"></i> <span class="i-name">icon-folder-sm</span></div>
        <div class="the-icons" title="Code: 0xe873"><i class="demo-icon icon-cog-sm"></i> <span class="i-name">icon-cog-sm</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe874"><i class="demo-icon icon-cloud-sm"></i> <span class="i-name">icon-cloud-sm</span></div>
        <div class="the-icons" title="Code: 0xe875"><i class="demo-icon icon-lock-closed"></i> <span class="i-name">icon-lock-closed</span></div>
        <div class="the-icons" title="Code: 0xe876"><i class="demo-icon icon-play"></i> <span class="i-name">icon-play</span></div>
        <div class="the-icons" title="Code: 0xe877"><i class="demo-icon icon-comment"></i> <span class="i-name">icon-comment</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe878"><i class="demo-icon icon-search-sm"></i> <span class="i-name">icon-search-sm</span></div>
        <div class="the-icons" title="Code: 0xe879"><i class="demo-icon icon-link-sm"></i> <span class="i-name">icon-link-sm</span></div>
        <div class="the-icons" title="Code: 0xe87a"><i class="demo-icon icon-lock-open"></i> <span class="i-name">icon-lock-open</span></div>
        <div class="the-icons" title="Code: 0xe87b"><i class="demo-icon icon-eye"></i> <span class="i-name">icon-eye</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe87c"><i class="demo-icon icon-eye-off"></i> <span class="i-name">icon-eye-off</span></div>
        <div class="the-icons" title="Code: 0xe87d"><i class="demo-icon icon-tag-sm"></i> <span class="i-name">icon-tag-sm</span></div>
        <div class="the-icons" title="Code: 0xe87e"><i class="demo-icon icon-th-large"></i> <span class="i-name">icon-th-large</span></div>
        <div class="the-icons" title="Code: 0xe87f"><i class="demo-icon icon-th-list"></i> <span class="i-name">icon-th-list</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe880"><i class="demo-icon icon-resize-small"></i> <span class="i-name">icon-resize-small</span></div>
        <div class="the-icons" title="Code: 0xe881"><i class="demo-icon icon-resize-full"></i> <span class="i-name">icon-resize-full</span></div>
        <div class="the-icons" title="Code: 0xe882"><i class="demo-icon icon-wrench"></i> <span class="i-name">icon-wrench</span></div>
        <div class="the-icons" title="Code: 0xe883"><i class="demo-icon icon-mail"></i> <span class="i-name">icon-mail</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe884"><i class="demo-icon icon-calendar-inv"></i> <span class="i-name">icon-calendar-inv</span></div>
        <div class="the-icons" title="Code: 0xe885"><i class="demo-icon icon-phone"></i> <span class="i-name">icon-phone</span></div>
        <div class="the-icons" title="Code: 0xe886"><i class="demo-icon icon-plus-circled"></i> <span class="i-name">icon-plus-circled</span></div>
        <div class="the-icons" title="Code: 0xe887"><i class="demo-icon icon-minus"></i> <span class="i-name">icon-minus</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe888"><i class="demo-icon icon-minus-circled"></i> <span class="i-name">icon-minus-circled</span></div>
        <div class="the-icons" title="Code: 0xf004"><i class="demo-icon icon-down-open"></i> <span class="i-name">icon-down-open</span></div>
        <div class="the-icons" title="Code: 0xf005"><i class="demo-icon icon-up-open"></i> <span class="i-name">icon-up-open</span></div>
        <div class="the-icons" title="Code: 0xf006"><i class="demo-icon icon-right-open"></i> <span class="i-name">icon-right-open</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xf007"><i class="demo-icon icon-left-open"></i> <span class="i-name">icon-left-open</span></div>
        <div class="the-icons" title="Code: 0xf019"><i class="demo-icon icon-globe-inv"></i> <span class="i-name">icon-globe-inv</span></div>
        <div class="the-icons" title="Code: 0xf01d"><i class="demo-icon icon-paper-plane"></i> <span class="i-name">icon-paper-plane</span></div>
        <div class="the-icons" title="Code: 0xf031"><i class="demo-icon icon-location"></i> <span class="i-name">icon-location</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xf047"><i class="demo-icon icon-move"></i> <span class="i-name">icon-move</span></div>
        <div class="the-icons" title="Code: 0xf06d"><i class="demo-icon icon-ok-circled"></i> <span class="i-name">icon-ok-circled</span></div>
        <div class="the-icons" title="Code: 0xf06e"><i class="demo-icon icon-cancel-circled"></i> <span class="i-name">icon-cancel-circled</span></div>
        <div class="the-icons" title="Code: 0xf099"><i class="demo-icon icon-twitter"></i> <span class="i-name">icon-twitter</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xf09a"><i class="demo-icon icon-facebook"></i> <span class="i-name">icon-facebook</span></div>
        <div class="the-icons" title="Code: 0xf09b"><i class="demo-icon icon-github"></i> <span class="i-name">icon-github</span></div>
        <div class="the-icons" title="Code: 0xf198"><i class="demo-icon icon-slack"></i> <span class="i-name">icon-slack</span></div>
        <div class="the-icons" title="Code: 0xf1ce"><i class="demo-icon icon-circle-notch"></i> <span class="i-name">icon-circle-notch</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xf1e0"><i class="demo-icon icon-share"></i> <span class="i-name">icon-share</span></div>
        <div class="the-icons" title="Code: 0xf30c"><i class="demo-icon icon-linkedin"></i> <span class="i-name">icon-linkedin</span></div>
        <div class="the-icons" title="Code: 0xe08e"><i class="demo-icon icon-link-ext"></i> <span class="i-name">icon-link-ext</span></div>
        <div class="the-icons" title="Code: 0xef16c"><i class="demo-icon icon-stackoverflow"></i> <span class="i-name">icon-stackoverflow</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe88c"><i class="demo-icon icon-new-document"></i> <span class="i-name">icon-new-document</span></div>
        <div class="the-icons" title="Code: 0xe88d"><i class="demo-icon icon-external-link"></i> <span class="i-name">icon-external-link</span></div>
        <div class="the-icons" title="Code: 0xe8c2"><i class="demo-icon icon-puzzles"></i> <span class="i-name">icon-puzzles</span></div>
        <div class="the-icons" title="Code: 0xe8c3"><i class="demo-icon icon-piece-of-cake"></i> <span class="i-name">icon-piece-of-cake</span></div>
      </div>
      <div class="row">
        <div class="the-icons" title="Code: 0xe8c4"><i class="demo-icon icon-dumbbell"></i> <span class="i-name">icon-dumbbell</span></div>
      </div>
    </div>
