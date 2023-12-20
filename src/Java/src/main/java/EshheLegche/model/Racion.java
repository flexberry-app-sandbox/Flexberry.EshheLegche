package EshheLegche.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import EshheLegche.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Рацион
 */
@Entity(name = "IISEshheLegcheРацион")
@Table(schema = "public", name = "Рацион")
public class Racion {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерРациона")
    private Integer номеррациона;

    @Column(name = "ТипКорма")
    private String типкорма;

    @Column(name = "СоставКорма")
    private String составкорма;

    @Column(name = "ВесКорма")
    private String вескорма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;


    public Racion() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерРациона() {
      return номеррациона;
    }

    public void setНомерРациона(Integer номеррациона) {
      this.номеррациона = номеррациона;
    }

    public String getТипКорма() {
      return типкорма;
    }

    public void setТипКорма(String типкорма) {
      this.типкорма = типкорма;
    }

    public String getСоставКорма() {
      return составкорма;
    }

    public void setСоставКорма(String составкорма) {
      this.составкорма = составкорма;
    }

    public String getВесКорма() {
      return вескорма;
    }

    public void setВесКорма(String вескорма) {
      this.вескорма = вескорма;
    }


}