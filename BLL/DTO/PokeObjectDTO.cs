using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO
{

    public class PokeObjectDTO
    {
        public AbilityDTO[] abilities { get; set; }
        public int base_experience { get; set; }
        public FormDTO[] forms { get; set; }
        public Game_IndicesDTO[] game_indices { get; set; }
        public int height { get; set; }
        public object[] held_items { get; set; }
        public int id { get; set; }
        public bool is_default { get; set; }
        public string location_area_encounters { get; set; }
        public MoveDTO[] moves { get; set; }
        public string name { get; set; }
        public int order { get; set; }
        public object[] past_types { get; set; }
        public SpeciesDTO species { get; set; }
        public SpritesDTO sprites { get; set; }
        public StatDTO[] stats { get; set; }
        public TypeDTO[] types { get; set; }
        public int weight { get; set; }
    }

    public class SpeciesDTO
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class SpritesDTO
    {
        public string back_default { get; set; }
        public object back_female { get; set; }
        public string back_shiny { get; set; }
        public object back_shiny_female { get; set; }
        public string front_default { get; set; }
        public object front_female { get; set; }
        public string front_shiny { get; set; }
        public object front_shiny_female { get; set; }
        public OtherDTO other { get; set; }
        public VersionsDTO versions { get; set; }
    }

    public class OtherDTO
    {
        public Dream_WorldDTO dream_world { get; set; }
        public OfficialArtworkDTO officialartwork { get; set; }
    }

    public class Dream_WorldDTO
    {
        public string front_default { get; set; }
        public object front_female { get; set; }
    }

    public class OfficialArtworkDTO
    {
        public string front_default { get; set; }
    }

    public class VersionsDTO
    {
        public GenerationIDTO generationi { get; set; }
        public GenerationIiDTO generationii { get; set; }
        public GenerationIiiDTO generationiii { get; set; }
        public GenerationIvDTO generationiv { get; set; }
        public GenerationVDTO generationv { get; set; }
        public GenerationViDTO generationvi { get; set; }
        public GenerationViiDTO generationvii { get; set; }
        public GenerationViiiDTO generationviii { get; set; }
    }

    public class GenerationIDTO
    {
        public RedBlueDTO redblue { get; set; }
        public YellowDTO yellow { get; set; }
    }

    public class RedBlueDTO
    {
        public string back_default { get; set; }
        public string back_gray { get; set; }
        public string front_default { get; set; }
        public string front_gray { get; set; }
    }

    public class YellowDTO
    {
        public string back_default { get; set; }
        public string back_gray { get; set; }
        public string front_default { get; set; }
        public string front_gray { get; set; }
    }

    public class GenerationIiDTO
    {
        public CrystalDTO crystal { get; set; }
        public GoldDTO gold { get; set; }
        public SilverDTO silver { get; set; }
    }

    public class CrystalDTO
    {
        public string back_default { get; set; }
        public string back_shiny { get; set; }
        public string front_default { get; set; }
        public string front_shiny { get; set; }
    }

    public class GoldDTO
    {
        public string back_default { get; set; }
        public string back_shiny { get; set; }
        public string front_default { get; set; }
        public string front_shiny { get; set; }
    }

    public class SilverDTO
    {
        public string back_default { get; set; }
        public string back_shiny { get; set; }
        public string front_default { get; set; }
        public string front_shiny { get; set; }
    }

    public class GenerationIiiDTO
    {
        public EmeraldDTO emerald { get; set; }
        public FireredLeafgreenDTO fireredleafgreen { get; set; }
        public RubySapphireDTO rubysapphire { get; set; }
    }

    public class EmeraldDTO
    {
        public string front_default { get; set; }
        public string front_shiny { get; set; }
    }

    public class FireredLeafgreenDTO
    {
        public string back_default { get; set; }
        public string back_shiny { get; set; }
        public string front_default { get; set; }
        public string front_shiny { get; set; }
    }

    public class RubySapphireDTO
    {
        public string back_default { get; set; }
        public string back_shiny { get; set; }
        public string front_default { get; set; }
        public string front_shiny { get; set; }
    }

    public class GenerationIvDTO
    {
        public DiamondPearlDTO diamondpearl { get; set; }
        public HeartgoldSoulsilverDTO heartgoldsoulsilver { get; set; }
        public PlatinumDTO platinum { get; set; }
    }

    public class DiamondPearlDTO
    {
        public string back_default { get; set; }
        public object back_female { get; set; }
        public string back_shiny { get; set; }
        public object back_shiny_female { get; set; }
        public string front_default { get; set; }
        public object front_female { get; set; }
        public string front_shiny { get; set; }
        public object front_shiny_female { get; set; }
    }

    public class HeartgoldSoulsilverDTO
    {
        public string back_default { get; set; }
        public object back_female { get; set; }
        public string back_shiny { get; set; }
        public object back_shiny_female { get; set; }
        public string front_default { get; set; }
        public object front_female { get; set; }
        public string front_shiny { get; set; }
        public object front_shiny_female { get; set; }
    }

    public class PlatinumDTO
    {
        public string back_default { get; set; }
        public object back_female { get; set; }
        public string back_shiny { get; set; }
        public object back_shiny_female { get; set; }
        public string front_default { get; set; }
        public object front_female { get; set; }
        public string front_shiny { get; set; }
        public object front_shiny_female { get; set; }
    }

    public class GenerationVDTO
    {
        public BlackWhiteDTO blackwhite { get; set; }
    }

    public class BlackWhiteDTO
    {
        public AnimatedDTO animated { get; set; }
        public string back_default { get; set; }
        public object back_female { get; set; }
        public string back_shiny { get; set; }
        public object back_shiny_female { get; set; }
        public string front_default { get; set; }
        public object front_female { get; set; }
        public string front_shiny { get; set; }
        public object front_shiny_female { get; set; }
    }

    public class AnimatedDTO
    {
        public string back_default { get; set; }
        public object back_female { get; set; }
        public string back_shiny { get; set; }
        public object back_shiny_female { get; set; }
        public string front_default { get; set; }
        public object front_female { get; set; }
        public string front_shiny { get; set; }
        public object front_shiny_female { get; set; }
    }

    public class GenerationViDTO
    {
        public OmegarubyAlphasapphireDTO omegarubyalphasapphire { get; set; }
        public XYDTO xy { get; set; }
    }

    public class OmegarubyAlphasapphireDTO
    {
        public string front_default { get; set; }
        public object front_female { get; set; }
        public string front_shiny { get; set; }
        public object front_shiny_female { get; set; }
    }

    public class XYDTO
    {
        public string front_default { get; set; }
        public object front_female { get; set; }
        public string front_shiny { get; set; }
        public object front_shiny_female { get; set; }
    }

    public class GenerationViiDTO
    {
        public IconsDTO icons { get; set; }
        public UltraSunUltraMoonDTO ultrasunultramoon { get; set; }
    }

    public class IconsDTO
    {
        public string front_default { get; set; }
        public object front_female { get; set; }
    }

    public class UltraSunUltraMoonDTO
    {
        public string front_default { get; set; }
        public object front_female { get; set; }
        public string front_shiny { get; set; }
        public object front_shiny_female { get; set; }
    }

    public class GenerationViiiDTO
    {
        public Icons1DTO icons { get; set; }
    }

    public class Icons1DTO
    {
        public string front_default { get; set; }
        public object front_female { get; set; }
    }

    public class AbilityDTO
    {
        public Ability1DTO ability { get; set; }
        public bool is_hidden { get; set; }
        public int slot { get; set; }
    }

    public class Ability1DTO
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class FormDTO
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class Game_IndicesDTO
    {
        public int game_index { get; set; }
        public VersionDTO version { get; set; }
    }

    public class VersionDTO
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class MoveDTO
    {
        public Move1DTO move { get; set; }
        public Version_Group_DetailsDTO[] version_group_details { get; set; }
    }

    public class Move1DTO
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class Version_Group_DetailsDTO
    {
        public int level_learned_at { get; set; }
        public Move_Learn_MethodDTO move_learn_method { get; set; }
        public Version_GroupDTO version_group { get; set; }
    }

    public class Move_Learn_MethodDTO
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class Version_GroupDTO
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class StatDTO
    {
        public int base_stat { get; set; }
        public int effort { get; set; }
        public Stat1DTO stat { get; set; }
    }

    public class Stat1DTO
    {
        public string name { get; set; }
        public string url { get; set; }
    }

    public class TypeDTO
    {
        public int slot { get; set; }
        public Type1DTO type { get; set; }
    }

    public class Type1DTO
    {
        public string name { get; set; }
        public string url { get; set; }
    }

}
