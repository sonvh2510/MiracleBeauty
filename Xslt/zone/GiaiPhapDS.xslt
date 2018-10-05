<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt"
 exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />

	<xsl:template match="/">
				<div class="row">
					<xsl:apply-templates select="/ZoneList/Zone"></xsl:apply-templates>
				</div>
	</xsl:template>

	<xsl:template match="Zone">
    <div class="col-lg-4 col-md-6">
      <a class="item">
        <xsl:attribute name="href">
          <xsl:value-of select="Url"></xsl:value-of>
        </xsl:attribute>
        <xsl:attribute name="target">
          <xsl:value-of select="Target"></xsl:value-of>
        </xsl:attribute>
        <figure>
          <img class="img-fluid">
            <xsl:attribute name="src">
              <xsl:value-of select="ImageUrl"></xsl:value-of>
            </xsl:attribute>
          </img>
          <figcaption>
            <h3><xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of></h3>
            <p><xsl:value-of select="Description" disable-output-escaping="yes"></xsl:value-of></p>
          </figcaption>
        </figure>
      </a>
    </div>
	</xsl:template>
</xsl:stylesheet>
